import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { MainWrapper } from '../src/styles'

import '../src/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Passawards | Vote nas suas lembranças</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Patua+One&family=Poppins:wght@400;700&family=Sigmar+One&display=swap" rel="stylesheet" /> 
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
