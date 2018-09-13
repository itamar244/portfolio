import React from 'react';
import Page from '../components/Page';
import GithubLink from '../components/GithubLink';

const FittedImage = ({ src }) =>
  <div
    className="card__image"
    style={{ backgroundImage: `url(${src})` }}
  />;

export default () =>
  <Page name="projects">
    <h2 data-text="header.projects"></h2>

    <div className="content__item cards-container" data-src="/images/project-synth.png">
      <div className="card">
        <div className="card__image">
        </div>
        <h3 className="card__title">
          <GithubLink text="ARITHMETIC EVALUATOR" repo="/arithmetic-evaluator" />
        </h3>
        <p className="card__description">
          An arithmetic expressions evaluator that became a tiny language that i built.<br/>
          <button className="card__button" id="open-ari">TRY IT</button>
        </p>
      </div>

      <div className="card">
        <FittedImage src="/images/project-synth.png" />
        <h3 className="card__title">
          <GithubLink text="SYNTH" repo="/synth" />
        </h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <template id="repl-template">
      <div className="repl-container">
        <div className="repl">
          <button className="repl__close">X</button>
          <div className="repl__wrapper">
            <pre className="repl__history"></pre>
            <p className="repl__input-wrapper">
              &gt;
              <input className="repl__input" type="text" />
            </p>
          </div>
        </div>

        <div className="repl__background" />
      </div>
    </template>
  </Page>;
