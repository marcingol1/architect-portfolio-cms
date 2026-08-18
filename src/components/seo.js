import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Meta tagi przez natywne Head API Gatsby 5 — bez react-helmet i bez CMS.
function Seo({ title, description, pathname }) {
  const data = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const meta = data.site.siteMetadata;
  const fullTitle = title ? `${title} — ${meta.title}` : meta.title;
  const desc = description || meta.description;
  const url = `${meta.siteUrl}${pathname || '/'}`;

  return (
    <>
      <html lang="pl" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="theme-color" content="#f4f1ea" />
      <link
        rel="icon"
        href={`data:image/svg+xml,${encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#f4f1ea"/><rect x="6" y="6" width="20" height="20" fill="none" stroke="#1c1a16" stroke-width="2"/><rect x="11" y="16" width="10" height="10" fill="#c2502b"/></svg>'
        )}`}
      />
      <link rel="canonical" href={url} />
    </>
  );
}

export default Seo;
