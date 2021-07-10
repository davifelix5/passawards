import { useRouter } from 'next/router'

import VotePage from '../../src/components/Vote'

import api from '../../src/services/api'

import { 
  VoteContextProvider,
} from '../../src/components/Vote/contexts/voteContext'

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
      <VoteContextProvider categoryId={id} sitekey={sitekey} >
        <VotePage 
          contestants={contestants}
          description={description}
          name={name}
          videoUrl={video}
        />
      </VoteContextProvider>
    ) : (
      <CenterContainer>
        <h1>Ocorre um erro de conexão no servidor :(</h1>
        <p>Tente novamente mais tarde!</p>
      </CenterContainer>
    )
  )
}

export async function getStaticPaths() {
  
  try {
    const categoriesResponse = await api.get('/categories/')
    const categories = categoriesResponse.data
  
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
      pahs: [],
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
    }
  } catch (err) {
    return {
      props: {
        category: {},
        error: true
      }
    }
  }

}
