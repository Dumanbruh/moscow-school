import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "@mui/material/styles";
import theme from '@/styles/theme';
import Footer from '@/components/ui/footer';
import Script from 'next/script';
import Cover from '@/components/ui/cover';
import 'swiper/css';
import 'swiper/css/navigation';
import RegisterBlock from '@/components/main-page-components/register';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="«Фестиваль школьного спорта»" />
      <meta
        property="description"
        content="«19 мая большой спортивный праздник на территории СК 'Москвич'»"
      />
      <meta property="og:description" content="«Московский спорт представляет большой фестиваль школьного спорта, посвящённый празднованию 100-летия Московского Спорта»" />
      <meta property="og:url" content="https://school.moscow.sport/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/gtoIcon.png" />
      <title>Фестиваль школьного спорта</title>
    </Head>
    <div style={{ display: "none" }} itemScope itemType="https://schema.org/Organization">
      <span itemProp="name">Фестиваль школьного спорта</span>
      <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        Адрес:
        <span itemProp="streetAddress">Москва, Волгоградский просп., 46/15с7</span>
      </div>
      <span itemProp="email">school.moscow.sport@yandex.ru</span>
      <div itemScope itemType="http://schema.org/ImageObject">
        <img src="/images/gtoIcon.png" itemProp="contentUrl" />
      </div>
    </div>
    <ThemeProvider theme={theme}>
      {/* <Cover />
      <RegisterBlock /> */}
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>

}
