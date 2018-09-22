export default ({ repo, text }) =>
  <a
    href={`https://github.com/itamar244${repo}`}
    target="_blank"
    rel="noreferrer"
  >
    {text}
  </a>;
