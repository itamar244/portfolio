import React from 'react';

export default ({ name, children }) =>
  <section className={`content content--${name}`}>
    <div className="content__wrapper">
      {children}
    </div>
  </section>;
