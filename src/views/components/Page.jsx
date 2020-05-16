import Text from './Text';

const Page = ({ name, children, active }) =>
  <section class={`content content--${name}${active ? ' active' : ''}`}>
    <div class="content__wrapper">
      {children}
    </div>
  </section>;

const PageTitle = ({ small = false, textPath }) =>
  <Text component={small ? 'h3': 'h2'} class="content__title" path={textPath} />;

Page.Title = PageTitle;

export default Page;