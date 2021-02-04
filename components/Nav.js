import Link from "next/link";
import styles from "components/Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Posts</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
