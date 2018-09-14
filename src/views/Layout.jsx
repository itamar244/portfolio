import Header from './Header';
import Loading from './Loading';
import About from './pages/About';
import Projects from './pages/Projects';

export default ({ children }) =>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Itamar Yatom</title>
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <link href="https://fonts.googleapis.com/css?family=Alef:400,700|Kosugi&amp;subset=hebrew" rel="stylesheet" />
    </head>

    <body>
      <Loading />
      <div id="root">
        <Header fixed={children != null} />

        <main id="content-container">
          <About />
          <Projects />
        </main>
      </div>

      {/* <template id="page-about-template"><About /></template>
      <template id="page-projects-template"><Projects /></template> */}
    </body>
  </html>;
