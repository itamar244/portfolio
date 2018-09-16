import Text from './Text';

const Link = ({ page, children }) =>
  <Text
    component="a"
    class="header__link"
    path={`header.${page}`}
    data-route={page}
    href={page + '.html'}
  />

const Logo = () =>
  <a class="logo" data-route="" href="/">
    <div class="logo__box">
      <div class="logo__box--inner"></div>
    </div>
    <h1 class="logo__text">IY</h1>
  </a>;

const Header = ({ fixed }) =>
  <header class={`header${fixed ? ' fixed' : ''}`}>
    <div class="header__logo">
      <Logo />
    </div>

    <h1 class="header__title">ITAMAR YATOM</h1>

    <nav class="header__nav">
      <Link page="about" />
      <Link page="projects"/>
    </nav>

    <div class="header__scroll-tip">
      <svg class="header__scroll-tip__arrow">
        <line x1="0%" x2="50%" y1="20%" y2="0%" stroke="currentColor" strokeWidth="2" />
        <line x1="50%" x2="100%" y1="0%" y2="20%" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </header>;

export default Header;
