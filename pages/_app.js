import "styles/globals.css";
import Header from "components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
