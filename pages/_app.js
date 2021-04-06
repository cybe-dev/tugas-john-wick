import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Cyro Store</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
