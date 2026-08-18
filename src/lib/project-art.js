// Grafiki projektów generowane jako SVG (string) — bez frameworka.
// Wspólny język: papier, cienka kreska "z plotera", jeden kolor akcentu.

const INK = 'var(--art-ink, #1c1a16)';
const PAPER = 'var(--art-paper, #f4f1ea)';
const FAINT = 'var(--art-faint, rgba(28, 26, 22, 0.22))';

const range = (n) => Array.from({ length: n }, (_, i) => i);

const ground = (y = 470) => `
  <g>
    <line x1="40" y1="${y}" x2="760" y2="${y}" stroke="${INK}" stroke-width="2.5" />
    ${range(36)
      .map(
        (i) =>
          `<line x1="${52 + i * 20}" y1="${y + 4}" x2="${44 + i * 20}" y2="${
            y + 14
          }" stroke="${FAINT}" stroke-width="1.5" />`
      )
      .join('')}
  </g>`;

const figure = (x, y, h = 26) => `
  <g stroke="${INK}" stroke-width="2" fill="none">
    <circle cx="${x}" cy="${y - h}" r="${h * 0.16}" fill="${INK}" stroke="none" />
    <line x1="${x}" y1="${y - h * 0.78}" x2="${x}" y2="${y}" />
  </g>`;

const villa = (accent) => `
  ${[
    [130, 90],
    [225, 130],
    [305, 70],
    [500, 110],
    [590, 60],
    [685, 125],
  ]
    .map(
      ([x, top]) => `
    <g stroke="${FAINT}" stroke-width="2.5" fill="none">
      <line x1="${x}" y1="${top}" x2="${x}" y2="470" />
      <line x1="${x}" y1="${top + 30}" x2="${x - 26}" y2="${top + 12}" />
      <line x1="${x}" y1="${top + 58}" x2="${x + 30}" y2="${top + 36}" />
      <line x1="${x}" y1="${top + 90}" x2="${x - 32}" y2="${top + 66}" />
    </g>`
    )
    .join('')}
  <circle cx="648" cy="132" r="38" stroke="${accent}" stroke-width="2.5" fill="none" />
  <rect x="96" y="316" width="608" height="154" fill="${PAPER}" />
  <rect x="80" y="298" width="640" height="16" fill="${INK}" />
  ${range(13)
    .map(
      (i) =>
        `<line x1="${110 + i * 48}" y1="314" x2="${
          110 + i * 48
        }" y2="470" stroke="${INK}" stroke-width="${i % 4 === 0 ? 3 : 1.5}" />`
    )
    .join('')}
  <line x1="96" y1="392" x2="704" y2="392" stroke="${FAINT}" stroke-width="1.5" />
  <line x1="96" y1="470" x2="704" y2="470" stroke="${INK}" stroke-width="2.5" />
  <rect x="374" y="380" width="52" height="90" fill="${accent}" />
  ${figure(452, 470, 30)}`;

const housing = (accent) => {
  const steps = [
    [100, 160],
    [240, 214],
    [380, 268],
    [520, 322],
  ];
  return `
  <path d="M100 470 L100 160 L240 160 L240 214 L380 214 L380 268 L520 268 L520 322 L660 322 L660 470"
    fill="${PAPER}" stroke="${INK}" stroke-width="3" />
  ${range(14)
    .map(
      (i) =>
        `<line x1="100" y1="${182 + i * 20}" x2="240" y2="${
          182 + i * 20
        }" stroke="${FAINT}" stroke-width="1" />`
    )
    .join('')}
  ${steps
    .map(([x, top], col) =>
      range(Math.floor((470 - top - 34) / 56))
        .map((row) => {
          const filled = (col + row) % 3 === 0 && col > 0;
          return `<rect x="${x + 26}" y="${top + 24 + row * 56}" width="88" height="36"
            fill="${filled ? accent : 'none'}"
            stroke="${filled ? 'none' : INK}" stroke-width="1.5" />`;
        })
        .join('')
    )
    .join('')}
  ${steps
    .slice(1)
    .map(
      ([x, top]) => `
    <g stroke="${INK}" stroke-width="1.5" fill="none">
      <line x1="${x - 20}" y1="${top - 46}" x2="${x - 20}" y2="${top - 6}" />
      <circle cx="${x - 20}" cy="${top - 56}" r="14" />
    </g>`
    )
    .join('')}
  ${range(3)
    .map(
      (i) =>
        `<path d="M672 ${
          492 + i * 16
        } q 20 -8 40 0 t 40 0" fill="none" stroke="${accent}" stroke-width="2" />`
    )
    .join('')}`;
};

const museum = (accent) => `
  <rect x="120" y="250" width="560" height="220" fill="${PAPER}" stroke="${INK}" stroke-width="3" />
  ${range(10)
    .map(
      (i) =>
        `<line x1="120" y1="${270 + i * 20}" x2="680" y2="${
          270 + i * 20
        }" stroke="${FAINT}" stroke-width="1" />`
    )
    .join('')}
  ${range(5)
    .map(
      (i) =>
        `<path d="M${168 + i * 100} 250 L${168 + i * 100} 196 L${
          228 + i * 100
        } 250 Z" fill="${accent}" stroke="${INK}" stroke-width="2" />`
    )
    .join('')}
  <rect x="372" y="318" width="56" height="152" fill="${INK}" />
  ${figure(452, 470, 26)}
  ${figure(330, 470, 24)}`;

const pavilion = (accent) => {
  const cols = [96, 150, 228, 282, 350, 414, 462, 540, 598, 662, 716];
  const roofY = (x) => 244 + 34 * Math.sin((x - 60) / 105);
  return `
  <circle cx="152" cy="128" r="42" fill="${accent}" />
  ${[
    [620, 150],
    [700, 190],
  ]
    .map(
      ([x, cy]) => `
    <g stroke="${FAINT}" stroke-width="2" fill="none">
      <line x1="${x}" y1="${cy + 34}" x2="${x}" y2="470" />
      <circle cx="${x}" cy="${cy}" r="36" />
    </g>`
    )
    .join('')}
  <path d="M60 ${roofY(60)} ${range(35)
    .map((i) => {
      const x = 60 + (i + 1) * 20;
      return `L${x} ${roofY(x).toFixed(1)}`;
    })
    .join(' ')}" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round" />
  ${cols
    .map(
      (x) =>
        `<line x1="${x}" y1="${
          roofY(x) + 5
        }" x2="${x}" y2="470" stroke="${INK}" stroke-width="2" />`
    )
    .join('')}
  <line x1="282" y1="404" x2="540" y2="404" stroke="${FAINT}" stroke-width="1.5" />
  <line x1="282" y1="436" x2="540" y2="436" stroke="${FAINT}" stroke-width="1.5" />
  ${figure(390, 470, 28)}`;
};

const tower = (accent) => {
  const chords = [470, 400, 336, 278, 226, 180, 140];
  const leftAt = (y) => 330 + ((470 - y) / 380) * 42;
  const rightAt = (y) => 470 - ((470 - y) / 380) * 42;
  return `
  <circle cx="160" cy="140" r="40" stroke="${accent}" stroke-width="2.5" fill="none" />
  ${range(17)
    .map((i) => {
      const x = 60 + i * 42;
      if (x > 290 && x < 510) return '';
      return `<path d="M${x - 18} 470 L${x} 408 L${
        x + 18
      } 470" fill="none" stroke="${FAINT}" stroke-width="2" />`;
    })
    .join('')}
  <line x1="${leftAt(470)}" y1="470" x2="${leftAt(96)}" y2="96" stroke="${INK}" stroke-width="3" />
  <line x1="${rightAt(470)}" y1="470" x2="${rightAt(96)}" y2="96" stroke="${INK}" stroke-width="3" />
  ${chords
    .map((y, i) => {
      if (i === chords.length - 1) return '';
      const yn = chords[i + 1];
      return `<g stroke="${INK}" stroke-width="1.5">
        <line x1="${leftAt(y)}" y1="${y}" x2="${rightAt(y)}" y2="${y}" />
        <line x1="${leftAt(y)}" y1="${y}" x2="${rightAt(yn)}" y2="${yn}" />
        <line x1="${rightAt(y)}" y1="${y}" x2="${leftAt(yn)}" y2="${yn}" />
      </g>`;
    })
    .join('')}
  ${[430, 358, 300, 250]
    .map(
      (y) =>
        `<ellipse cx="400" cy="${y}" rx="${
          rightAt(y) - 400 + 26
        }" ry="10" fill="none" stroke="${FAINT}" stroke-width="1.5" />`
    )
    .join('')}
  <rect x="338" y="74" width="124" height="22" fill="${INK}" />
  <rect x="338" y="60" width="124" height="8" fill="${accent}" />
  ${figure(540, 470, 24)}
  ${figure(558, 470, 20)}`;
};

const barn = (accent) => `
  ${[100, 118, 134, 660, 680]
    .map(
      (x, i) =>
        `<line x1="${x}" y1="470" x2="${
          x + (i % 2 === 0 ? 8 : -6)
        }" y2="404" stroke="${FAINT}" stroke-width="2" />`
    )
    .join('')}
  <circle cx="620" cy="130" r="34" stroke="${accent}" stroke-width="2.5" fill="none" />
  <path d="M250 470 L250 300 L400 188 L550 300 L550 470 Z" fill="${INK}" />
  <rect x="352" y="286" width="96" height="110" fill="${accent}" />
  <line x1="400" y1="286" x2="400" y2="396" stroke="${INK}" stroke-width="2" />
  <g opacity="0.28">
    <path d="M250 482 L250 560 L400 616 L550 560 L550 482 Z" fill="${INK}" />
  </g>
  ${range(3)
    .map(
      (i) =>
        `<line x1="${210 - i * 30}" y1="${500 + i * 22}" x2="${590 + i * 30}" y2="${
          500 + i * 22
        }" stroke="${FAINT}" stroke-width="1.5" />`
    )
    .join('')}`;

const VARIANTS = { villa, housing, museum, pavilion, tower, barn };

// Zwraca wnętrze elementu <svg viewBox="0 0 800 600"> dla danego wariantu.
export function renderArt(variant, accent = '#C2502B') {
  const draw = VARIANTS[variant] || villa;
  return `
  <rect x="0" y="0" width="800" height="600" fill="${PAPER}" />
  <rect x="22" y="22" width="756" height="556" fill="none" stroke="${FAINT}" stroke-width="1" />
  ${draw(accent)}
  ${ground()}`;
}
