import React from 'react';

const HeaderLink = ({ page }) =>
  <button
    className="header__link"
    data-text={`header.${page}`}
    data-route={page}
  />;

const Logo = () =>
  <div className="logo" data-route="">
    <div className="logo__box">
      <div className="logo__box--inner"></div>
    </div>
    <h1 className="logo__text">IY</h1>
  </div>;

const Header = () =>
  <header className="header">
    <div className="header__logo">
      <Logo />
    </div>

    <h1 className="header__title">ITAMAR YATOM</h1>

    <nav className="header__nav">
      <HeaderLink page="about" />
      <HeaderLink page="projects"/>
    </nav>

    <div className="header__scroll-tip">
      <svg className="header__scroll-tip__arrow">
        <line x1="0%" x2="50%" y1="20%" y2="0%" stroke="currentColor" strokeWidth="2" />
        <line x1="50%" x2="100%" y1="0%" y2="20%" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </header>;

export default Header;
