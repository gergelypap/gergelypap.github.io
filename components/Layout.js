import styles from "./Layout.module.scss";
import Header from "./Header";
import Head from "next/head";

const siteTitle = "@gpap";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is my personal blog." />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <footer>
        <small>© {new Date().getFullYear()} Whatever it means.</small>
      </footer>
    </div>
  );
}
