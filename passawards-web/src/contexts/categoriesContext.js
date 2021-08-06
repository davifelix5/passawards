import { createContext, useEffect, useState } from 'react'

import api from '../services/api'

const CategoriesContext = createContext({})

export default CategoriesContext

export function CategoriesContextProvider({children, value, credentials}) {

  const { USERNAME, PASSWORD } = credentials

  const allCategories = value.categories
  const filters = value.filters
  
  const [categories, setCategories] = useState(allCategories)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  
  const filterCategories = async () => {
    if (selectedFilters.length === 0 && !search) {
      stopSearch()
      return setCategories(allCategories)
    }
    
    const response = await api(USERNAME, PASSWORD).get('/categories', {
      params: {
        search,
        category_type__in: selectedFilters.join(',')
      }
    })

    setCategories(response.data)
    stopSearch()
  }
  
  useEffect(filterCategories, [selectedFilters, setCategories, search])

  const selectFilter = (filterId) => {
    setSelectedFilters([...selectedFilters, filterId])
  }

  const clearSelectedFilters = () => {
    setSelectedFilters([])
  }

  const removeFilter = (filterId) => {
    setSelectedFilters(selectedFilters.filter(id => id !== filterId))
  }

  const startSearch = () => setIsSearching(true)
  const stopSearch = () => setIsSearching(false)

  return (
    <CategoriesContext.Provider value={{
      categories,
      filters,
      selectedFilters,
      selectFilter,
      clearSelectedFilters,
      removeFilter,
      setSearch,
      startSearch,
      stopSearch,
      isSearching,
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}