import Categories from '../src/pages/Home'

import {
  CenterContainer,
} from '../src/styles'

import api from '../src/services/api'


export default function Home({ categoriesData, search, page, filtersData, error }) {
  return (
    !error ? (
      <Categories filters={filtersData} categoriesData={categoriesData} initialSearch={search} page={page} />
    ) : (
      <CenterContainer>
        <h1 style={{textAlign: 'center'}}>Ocorreu um erro de conexão no servidor :(</h1>
        <p>Tente novamente mais tarde!</p>
      </CenterContainer>
    )
  )
}

export async function getServerSideProps(context) {

  try {
    const { page, search, type } = context.query

    const categoriesResponse = await api.get('/categories/', {
      params: {
        page,
        search,
        category_type__in: type,
      },
    })
    const filtersResponse = await api.get('/filters/')
    
    const categoriesData = categoriesResponse.data
    const filtersData = filtersResponse.data
    return {
      props: {
        categoriesData,
        search: search || '',
        page: page || 1,
        filtersData,
      },
    }
  } catch (err) {
    return {
      props: {
        categoriesData: {},
        filtersData: [],
        error: true,
      },
    }
  
  }  
}