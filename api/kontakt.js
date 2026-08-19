// Vercel Serverless Function handling contact-form submissions.
//
// Free-tier notes:
// - One Node function, which Vercel's Hobby plan includes.
// - No npm dependencies: delivery goes through Resend's REST API using the
//   global fetch built into Node 18+, so nothing is added to the install.
// - Resend's free plan covers 3 000 emails/month (100/day), far above what a
//   studio contact form needs.
//
// Required environment variables (Vercel > Settings > Environment Variables):
//   RESEND_API_KEY  API key from resend.com
//   CONTACT_TO      recipient, e.g. pracownia@architektgol.pl
//   CONTACT_FROM    verified sender, e.g. "Formularz <formularz@architektgol.pl>"

const LIMITS = { name: 120, email: 200, message: 5000 };

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

function readBody(req) {
  const body = req.body;
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return Object.fromEntries(new URLSearchParams(body));
    }
  }
  return body;
}

function validate(fields) {
  const name = String(fields.name || '').trim();
  const email = String(fields.email || '').trim();
  const message = String(fields.message || '').trim();

  if (!name || !email || !message) return { error: 'Wypełnij wszystkie pola.' };
  if (!isEmail(email)) return { error: 'Podaj poprawny adres e-mail.' };
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return { error: 'Wiadomość jest zbyt długa.' };
  }
  return { data: { name, email, message } };
}

async function sendEmail({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    throw new Error(
      'Missing RESEND_API_KEY, CONTACT_TO or CONTACT_FROM environment variable'
    );
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Zapytanie ze strony: ${name}`,
      text: `Od: ${name} <${email}>\n\n${message}\n`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}

// Browsers with JS get JSON; a plain form POST (no JS) gets a redirect.
const wantsJson = (req) => (req.headers?.accept || '').includes('application/json');

function fail(req, res, status, message) {
  if (wantsJson(req)) return res.status(status).json({ ok: false, error: message });
  return res.redirect(303, '/kontakt/blad/');
}

function succeed(req, res) {
  if (wantsJson(req)) return res.status(200).json({ ok: true });
  return res.redirect(303, '/kontakt/dziekujemy/');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const fields = readBody(req);

  // Honeypot: bots fill hidden fields. Report success without sending.
  if (String(fields['bot-field'] || '').trim()) return succeed(req, res);

  const { data, error } = validate(fields);
  if (error) return fail(req, res, 400, error);

  try {
    await sendEmail(data);
  } catch (err) {
    console.error('Contact form delivery failed:', err.message);
    return fail(req, res, 502, 'Nie udało się wysłać wiadomości. Spróbuj ponownie.');
  }

  return succeed(req, res);
}
