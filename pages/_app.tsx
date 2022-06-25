import '../src/styles/globals.scss'
import '../src/assets/fontCss/icofont.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SEO } from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Footer from '../src/components/Footer';
import Script from 'next/script';
import * as gtag from '../google';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
      </Head>

      <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gtag.GA_ADSENSE_ID}`} crossOrigin="anonymous"></Script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )

}

export default MyApp
