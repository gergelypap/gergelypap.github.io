export default function ExternalLink({ href, children }) {
  return (
    <a href={href} rel="noreferrer noopener nofollow">
      {children}
    </a>
  );
}
