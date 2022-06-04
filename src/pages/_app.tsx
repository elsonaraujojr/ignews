import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Header } from "../components/Header";
import "../styles/global.scss";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>ig.news</title>
      </Head>
      <Header />

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
