import NProgress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { MainWrapper } from '../src/styles'

import '../src/global.css'

import 'nprogress/nprogress.css'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

function MyApp({ Component, pageProps }) {

  Router.events.on('routeChangeStart', () => NProgress.start())

  Router.events.on('routeChangeComplete', () => NProgress.done())

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <title>Passawards | Vote nas suas lembranças</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
