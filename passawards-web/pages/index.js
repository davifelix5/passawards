import Categories from '../src/components/Categories'

import { CategoriesContextProvider } from '../src/contexts/categoriesContext'

import {
  CenterContainer,
} from '../src/styles'

import api from '../src/services/api'


export default function Home({ categories, filters, error, credentials }) {
  return (
    !error ? (
      <CategoriesContextProvider value={{categories, filters}} credentials={credentials}>
        <Categories />
      </CategoriesContextProvider>
    ) : (
      <CenterContainer>
        <h1 style={{textAlign: 'center'}}>Ocorreu um erro de conexão no servidor :(</h1>
        <p>Tente novamente mais tarde!</p>
      </CenterContainer>
    )
  )
}

export async function getStaticProps(context) {

  try {
    const USERNAME = process.env.API_USERNAME
    const PASSWORD = process.env.API_PASSWORD

    const categoriesResponse = await api(USERNAME, PASSWORD).get('/categories/')
    const filtersResponse = await api(USERNAME, PASSWORD).get('/filters/')
    
    const categories = categoriesResponse.data
    const filters = filtersResponse.data
    
    return {
      props: {
        categories,
        filters,
        credentials: { USERNAME, PASSWORD }
      },
      revalidate: 60,
    }
  } catch (err) {
    
    return {
      props: {
        categories: [],
        filters: [],
        error: true,
      },
      revalidate: 60,
    }
  
  }  
}