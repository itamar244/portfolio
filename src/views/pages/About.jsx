import Page from '../components/Page';
import Text from '../components/Text';

export default props =>
  <Page name="about" {...props}>
    <Text component="h2" path="header.about" />
    <img
      class="content__image content__image--circle float-end"
      src="/images/selfie.jpeg"
      alt="selfie"
    />

    <div class="content__item">
      <Text path="about-info.main" />
    </div>

    <div class="content__item">
      <h3>Israel</h3>
      <Text path="about-info.second" />
    </div>
  </Page>;
