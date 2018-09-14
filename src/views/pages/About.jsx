import Page from '../components/Page';

export default () =>
  <Page name="about">
    <h2 data-text="header.about" />
    <img class="content__image content__image--circle float-end" src="/images/selfie.jpeg" />

    <div class="content__item">
      <p data-text="about-info.main" />
    </div>

    <div class="content__item">
      <h3>Israel</h3>
      <p data-text="about-info.second" />
    </div>
  </Page>;
