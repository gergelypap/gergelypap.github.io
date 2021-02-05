import styles from "components/Header.module.scss";
import Nav from "components/Nav";

export default function Header({ user }) {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        alt="@gpap"
        src="https://avatars.githubusercontent.com/u/5883922?s=460&u=5d8abc013f98535fc97aea91f79e93dea71e7f54&v=4"
      />
      <h1>@gpap</h1>
      <p>My developer blog. Because everybody has one.</p>
      <Nav />
    </header>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/gergelypap`);
  const user = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
}
