export default ({ name, children, active }) =>
  <section class={`content content--${name}${active ? ' active' : ''}`}>
    <div class="content__wrapper">
      {children}
    </div>
  </section>;
