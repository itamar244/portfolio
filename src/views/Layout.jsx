import Header from './Header';
import Loading from './Loading';
import About from './pages/About';
import Projects from './pages/Projects';

export default ({ page }) =>
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
        <Header fixed={page !== ''} />

        <main id="content-container">
          <About active={page === 'about'} />
          <Projects active={page === 'projects'} />
        </main>
      </div>
    </body>
  </html>;
