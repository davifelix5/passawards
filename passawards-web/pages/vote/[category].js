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

export default function Vote({ category, error, sitekey, credentials }) {

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
      <VoteContextProvider categoryId={id} sitekey={sitekey} credentials={credentials}>
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
    
    const USERNAME = process.env.API_USERNAME 
    const PASSWORD = process.env.API_PASSWORD 

    const categoriesResponse = await api(USERNAME, PASSWORD).get('/categories/')
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
      paths: [],
      fallback: true,
    }
  }
}

export async function getStaticProps(context) {

  try {

    const USERNAME = process.env.API_USERNAME
    const PASSWORD = process.env.API_PASSWORD
    
    const { category } = context.params
    
    const categoryResponse = await api(USERNAME, PASSWORD).get(`/categories/${category}/`)
    const categoryData = categoryResponse.data
    
    return {
      props: {
        category: categoryData,
        sitekey: process.env.RECAPTCHA_CLIENT_KEY,
        credentials: { USERNAME, PASSWORD }
      },
    }
  } catch (err) {
    return {
      props: {
        category: {},
        error: true,
      }
    }
  }

}
