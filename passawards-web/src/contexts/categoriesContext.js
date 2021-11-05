import { createContext, useEffect, useState } from 'react'
import api from '../services/api'


const CategoriesContext = createContext({})

export default CategoriesContext

export function CategoriesContextProvider({children, value}) {


  const allCategories = value.categories
  const filters = value.filters
  
  const [categories, setCategories] = useState(allCategories)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const fetchCateogories = async () => {
    startSearch()
    const response = await api.get('/categories', {
      params: {
        search,
        category_type__in: selectedFilters.join(',')
      }
    })
    return response.data
  }

  function filterCategories() {
    const emptyFilters = selectedFilters.length === 0
    const allFiltersSelected = selectedFilters.length === filters.length
    if ((emptyFilters || allFiltersSelected) && !search) {
      stopSearch()
      return setCategories(allCategories)
    }
    
    fetchCateogories().then(response => {
      stopSearch()
      setCategories(response)
    })

  }
  
  useEffect(filterCategories, [selectedFilters, setCategories, search, setIsSearching])

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