import { createContext, useEffect, useState } from 'react'

const CategoriesContext = createContext({})

export default CategoriesContext

export function CategoriesContextProvider({children, value}) {
  const allCategories = value.categories
  const filters = value.filters
  
  const [categories, setCategories] = useState(allCategories)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [search, setSearch] = useState('')
  
  const filterCategories = () => {
    const categoriesToFilter = search ? searchCategories() : allCategories
    
    if (selectedFilters.length === 0) {
      return setCategories(categoriesToFilter)
    }

    // TODO implement a call to the backend
    const newCategories = selectedFilters.reduce((acc, filterId) =>
      acc.concat(categoriesToFilter.filter(cat => cat.category_type == filterId))
    , [])

    setCategories(newCategories.sort((cat1, cat2) => cat1.id - cat2.id))
  }
  
  const searchCategories = () => {
    // TODO implement a call to the backend
    const searched = allCategories.filter(category => {
      return category.name.toLowerCase().includes(search.toLowerCase())
    })
    return searched
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

  return (
    <CategoriesContext.Provider value={{
      categories,
      filters,
      selectedFilters,
      selectFilter,
      clearSelectedFilters,
      removeFilter,
      setSearch,
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}