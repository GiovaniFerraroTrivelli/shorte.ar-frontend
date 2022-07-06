import '../styles/globals.css';
import Footer from "../components/footer";
import React from "react";
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>shorte.ar - Generá enlaces cortos de un solo uso al instante</title>
            </Head>
            <div className="flex flex-col h-screen justify-center">
                <main className="flex-grow flex justify-center items-center">
                    <Component {...pageProps} />
                </main>
                <Footer/>
            </div>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
