import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "@mui/material/styles";
import theme from '@/styles/theme';
import Footer from '@/components/ui/footer';
import Script from 'next/script';
import Cover from '@/components/ui/cover';
import 'swiper/css';
import RegisterBlock from '@/components/main-page-components/register';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="School Moscow Sport" />
      <meta
        property="description"
        content="test"
      />
      <meta property="og:url" content="https://school.moscow.sport/" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="/images/icelogo.png" />
        <link rel="icon" href="/icelogo.ico" /> */}
      <title>School Moscow Sport</title>
    </Head>
    <Script
      id="metaScript"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "SportsEvent",
          name: "test",
          url: "https://school.moscow.sport/",
          description:
            "test",
          startDate: "test",
          endDate: "test",
          location: {
            "@type": "Place",
            name: "ГБОУ ДО СШОР «МОСКВИЧ»",
            sameAs: "https://school.moscow.sport/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Волгоградский просп., 46/15с7",
              addressLocality: "г. Москва",
            },
          },
        }),
      }}
    />
    <ThemeProvider theme={theme}>
      <Cover />
      <RegisterBlock />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>

}
