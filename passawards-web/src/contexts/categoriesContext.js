import { createContext, useState } from 'react'
import api from '../services/api'


const CategoriesContext = createContext({})

export default CategoriesContext

export function CategoriesContextProvider({children, value}) {


  const allCategories = value.categories
  const filters = value.filters
  
  const [categories, setCategories] = useState(allCategories)
  const [isSearching, setIsSearching] = useState(false)

  const fetchCateogories = async (search, selectedFilters) => {
    const response = await api.get('/categories', {
      params: {
        search,
        category_type__in: selectedFilters.join(',')
      }
    })
    return response.data
  }

  async function filterCategories(search, selectedFilters) {   
    startSearch()
    const response = await fetchCateogories(search, selectedFilters)
    stopSearch()
    setCategories(response)
  }

  const startSearch = () => setIsSearching(true)
  const stopSearch = () => setIsSearching(false)

  async function restoreCategories() {
    await filterCategories('', [])
  }

  return (
    <CategoriesContext.Provider value={{
      categories,
      filters,
      isSearching,
      filterCategories,
      restoreCategories
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}