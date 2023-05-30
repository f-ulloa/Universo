import "./Link.css";

export const Link = ({ href, textRef }: { href: string; textRef: string }) => {
  return (
    <li>
      <a href={href}>{textRef}</a>
    </li>
  );
};
