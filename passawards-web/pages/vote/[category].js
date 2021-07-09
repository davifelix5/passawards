import VotePage from '../../src/components/Vote'

import api from '../../src/services/api'

export default function Vote({ category }) {
  
  const {
    contestants,
    description,
    name,
    video,
  } = category

  return (
    <div>
      <VotePage 
        contestants={contestants}
        description={description}
        name={name}
        videoUrl={video}
      />
    </div>
  )
}

export async function getStaticPaths() {
  
  const categoriesResponse = await api.get('/categories/')
  const categories = categoriesResponse.data

  const paths = categories.map(cat => {
    return {
      params: { category: String(cat.id) }
    }
  })
  
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { category } = context.params
  
  const categoryResponse = await api.get(`/categories/${category}/`)
  const categoryData = categoryResponse.data

  return {
    props: {
      category: categoryData,
    },
  }
}
