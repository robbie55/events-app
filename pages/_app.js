import Layout from "@/components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// root component where different componenets and pages are initially rendered

export default MyApp;
