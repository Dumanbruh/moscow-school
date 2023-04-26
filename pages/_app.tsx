import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "@mui/material/styles";
import theme from '@/styles/theme';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery';

export default function App({ Component, pageProps }: AppProps) {
  const { isDesktop } = useGlobalMediaQuery();

  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>

}
