import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { MainWrapper } from '../src/styles'

import '../src/global.css'

function MyApp({ Component, pageProps }) {
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
