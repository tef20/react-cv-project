import React from "react";

export default function Section({ title, content }) {
  return (
    <section className='section'>
      <h2 className='section--header'>{title}</h2>
      <div className='section--content'>{content}</div>
    </section>
  );
}
