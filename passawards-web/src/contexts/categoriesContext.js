import { createContext, useEffect, useState } from 'react'

const CategoriesContext = createContext({})

export default CategoriesContext

export function CategoriesContextProvider({children, value}) {
  const allCategories = value.categories
  const filters = value.filters

  const [categories, setCategories] = useState(allCategories)
  const [selectedFilters, setSelectedFilters] = useState([])
  
  
  useEffect(() => {
    const filterCategories = () => {
      if (selectedFilters.length === 0) {
        return setCategories(allCategories)
      }

      let newCategories = []
      for (let filterId of selectedFilters) {
        newCategories = newCategories.concat(allCategories.filter(cat => cat.category_type == filterId))
      }

      setCategories(newCategories.sort((cat1, cat2) => cat1.id - cat2.id))
    }

    filterCategories()
  }, [selectedFilters, setCategories])

  const selectFilter = (filterId) => {
    setSelectedFilters([...selectedFilters, filterId])
  }

  const clearSelectedFilters = () => {
    setSelectedFilters([])
  }

  const removeFilter = (filterId) => {
    setSelectedFilters(selectedFilters.filter(id => id !== filterId))
  }

  return (
    <CategoriesContext.Provider value={{
      categories,
      filters,
      selectedFilters,
      selectFilter,
      clearSelectedFilters,
      removeFilter,
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}