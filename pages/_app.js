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
//wrapping <Component>, which is where all of our pages and components are rendered
//in a layout to have a nav bar on the top of any rendered page

export default MyApp;
