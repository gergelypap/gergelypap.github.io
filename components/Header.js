import styles from "components/Header.module.scss";
import Nav from "components/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <picture className={styles.avatar}>
        <source srcSet="/img/me.avif" type="image/avif" />
        <img alt="@gpap" src="/img/me.webp" />
      </picture>
      <h1>@gpap</h1>
      <p>My developer blog. Because everybody has one.</p>
      <Nav />
    </header>
  );
}
