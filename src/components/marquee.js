import React from 'react';

// Typograficzny pas przewijany między sekcjami. Czysta animacja CSS,
// zatrzymywana przy prefers-reduced-motion; dekoracja — ukryta przed czytnikami.
function Marquee({ items }) {
  const sequence = (
    <>
      {items.map((item) => (
        <span key={item} className="marquee__item">
          {item}
          <span className="marquee__dot" />
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {sequence}
        {sequence}
      </div>
    </div>
  );
}

export default Marquee;
