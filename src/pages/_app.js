// pages/_app.js
import "../styles/globals.css";
import Layout from "@/@core/components/layout";
import CoffeeThemeProvider from "@/@core/components/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
