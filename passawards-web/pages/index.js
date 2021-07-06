import Categories from '../src/components/Categories'

import CategoriesContext, { CategoriesContextProvider } from '../src/contexts/categoriesContext'

import api from '../src/services/api'


export default function Home({categories, filters}) {
  return (
    <CategoriesContextProvider value={{categories, filters}}>
      <Categories />
    </CategoriesContextProvider>
  )
}

export async function getStaticProps(context) {
  const categoriesResponse = await api.get('/categories/')
  const filtersResponse = await api.get('/filters/')

  const categories = categoriesResponse.data
  const filters = filtersResponse.data

  return {
    props: {
      categories,
      filters,
    },
    revalidate: 60,
  }
}