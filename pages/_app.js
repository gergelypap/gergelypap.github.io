import "styles/globals.scss";
import Header from "components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
