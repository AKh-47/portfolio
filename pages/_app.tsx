import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/1425fdb9d3.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="shortcut icon" href="/coding.png" />

        <title>Akhil Kala | Web Developer</title>
      </Head>
      <ToastProvider placement="top-center" autoDismissTimeout="1200">
        <Component {...pageProps} />
      </ToastProvider>
    </>
  );
}

export default MyApp;
