import React from 'react';
import Reveal from './reveal';

function Testimonial({ quote, author, role }) {
  return (
    <Reveal as="figure" className="testimonial">
      <span className="testimonial__mark" aria-hidden="true">
        „
      </span>
      <blockquote className="testimonial__quote">{quote}</blockquote>
      <figcaption className="testimonial__caption">
        <span className="testimonial__author">{author}</span>
        <span className="testimonial__role">{role}</span>
      </figcaption>
    </Reveal>
  );
}

export default Testimonial;
