import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Header from './components/Header'
import Routes from './routes'
import { MainWrapper } from './styles'

import './global.css'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <MainWrapper>
          <Routes />
        </MainWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
