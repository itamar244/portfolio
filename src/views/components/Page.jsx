export default ({ name, children }) =>
  <section class={`content content--${name}`}>
    <div class="content__wrapper">
      {children}
    </div>
  </section>;
