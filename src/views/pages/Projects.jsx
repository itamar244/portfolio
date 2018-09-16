import Page from '../components/Page';
import GithubLink from '../components/GithubLink';
import Text from '../component/Text';

const FittedImage = ({ src }) =>
  <div
    class="card__image"
    style={{ backgroundImage: `url(${src})` }}
  />;

export default props =>
  <Page name="projects" {...props}>
    <Text component="h2" path="header.projects" />

    <div class="content__item cards-container" data-src="/images/project-synth.png">
      <div class="card">
        <div class="card__image">
        </div>
        <h3 class="card__title">
          <GithubLink text="ARITHMETIC EVALUATOR" repo="/arithmetic-evaluator" />
        </h3>
        <p class="card__description">
          An arithmetic expressions evaluator that became a tiny language that i built.<br/>
          <button class="card__button" id="open-ari">TRY IT</button>
        </p>
      </div>

      <div class="card">
        <FittedImage src="/images/project-synth.png" />
        <h3 class="card__title">
          <GithubLink text="SYNTH" repo="/synth" />
        </h3>
        <p class="card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <template id="repl-template">
      <div class="repl-container">
        <div class="repl">
          <button class="repl__close">X</button>
          <div class="repl__wrapper">
            <pre class="repl__history"></pre>
            <p class="repl__input-wrapper">
              &gt;
              <input class="repl__input" type="text" />
            </p>
          </div>
        </div>

        <div class="repl__background" />
      </div>
    </template>
  </Page>;
