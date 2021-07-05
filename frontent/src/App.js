import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Categories from './components/Categories'
import Header from './components/Header'

import './global.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Categories />
    </ThemeProvider>
  );
}

export default App;
