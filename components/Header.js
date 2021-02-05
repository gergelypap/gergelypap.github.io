import styles from "components/Header.module.scss";
import Nav from "components/Nav";
import Image from "next/image";

export default function Header({ user }) {
  return (
    <header className={styles.header}>
      <Image
        src="https://avatars.githubusercontent.com/u/5883922?v=4"
        height={200}
        width={200}
        quality={60}
        priority={true}
        alt="@gpap"
        className={styles.avatar}
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
