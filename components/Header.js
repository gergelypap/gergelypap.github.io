import styles from "components/Header.module.scss";
import Nav from "components/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://avatars.githubusercontent.com/u/5883922?v=4"
        height={200}
        width={200}
        alt="Avatar"
        className={styles.avatar}
      />
      <h1>@gpap</h1>
      <p>My developer blog. Because everybody has one.</p>
      <Nav />
    </header>
  );
}
