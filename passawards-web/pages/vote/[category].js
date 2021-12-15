import { useRouter } from 'next/router'

import VotePage from '../../src/pages/Vote'

import api from '../../src/services/api'

import { 
  VoteContextProvider,
} from '../../src/contexts/voteContext'

import { 
  CenterContainer,
  Loader
} from '../../src/styles'

export default function Vote({ category, error, sitekey }) {

  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <CenterContainer>
        <Loader />
      </CenterContainer>
    )
  }
  
  const {
    id,
    contestants,
    description,
    name,
    video,
  } = category

  return (
    !error ? (
      <VoteContextProvider categoryId={id} sitekey={sitekey}>
        <VotePage 
          contestants={contestants}
          description={description}
          name={name}
          videoUrl={video}
        />
      </VoteContextProvider>
    ) : (
      <CenterContainer>
        <h1 style={{textAlign: 'center'}}>Ocorre um erro de conexão no servidor :(</h1>
        <p>Tente novamente mais tarde!</p>
      </CenterContainer>
    )
  )
}

export async function getStaticPaths() {
  
  try {
    
    const categoriesResponse = await api.get('/categories/')
    const responseData = categoriesResponse.data
    const categories = []
    
    for (let page=1; page<=responseData.page_count; page++) {
      const pageCategories = await api.get('/categories/', {
        params: {
          page,
        },
      })
      pageCategories.data.results.forEach(category => categories.push(category))
    }

    const paths = categories.map(cat => {
      return {
        params: { category: String(cat.id) }
      }
    })
    
    return {
      paths,
      fallback: true,
    }
  } catch (err) {
    return {
      paths: [],
      fallback: true,
    }
  }
}

export async function getStaticProps(context) {

  try {

    const { category } = context.params
    
    const categoryResponse = await api.get(`/categories/${category}/`)
    const categoryData = categoryResponse.data
    
    return {
      props: {
        category: categoryData,
        sitekey: process.env.RECAPTCHA_CLIENT_KEY,
      },
      revalidate: 60,
    }
  } catch (err) {
    return {
      props: {
        category: {},
        error: true,
      },
      revalidate: 60,
    }
  }

}
