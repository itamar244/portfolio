export default () =>
  <div id="loading">
    <style type="text/css">{`
      #loading {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: white;
        transition: opacity 0.4s, z-index 0s 0.4s;
        z-index: 1000;
      }
    `}</style>
  </div>;
