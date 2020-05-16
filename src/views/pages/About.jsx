import Page from '../components/Page';
import Text from '../components/Text';

export default props =>
  <Page name="about" {...props}>
    <Page.Title textPath="header.about" />
    <img
      class="content__image content__image--circle float-end"
      src="/images/selfie.jpeg"
      alt="selfie"
    />

    <div class="content__item">
      <Text path="about-info.main" />
    </div>

    <div class="content__item">
      <Page.Title textPath="about-info.whereabouts-title" small />
      <Text path="about-info.second" />
    </div>
  </Page>;
