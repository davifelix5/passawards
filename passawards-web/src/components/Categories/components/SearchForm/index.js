import React, { useContext, useState } from 'react'

import CategoriesContext from '../../../../contexts/categoriesContext'

import {
  FormContainer,
  SeachInput,
  Loader,
} from './styles'

const DEBOUNCE_TIMEOUT = 1 * 1000

export default function SearchForm() {
  
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  
  const {
    setSearch,
    isSearching,
    startSearch,
  } = useContext(CategoriesContext)

  function debounceSearch(value) {
    startSearch()
    clearTimeout(searchTimeout)
    setSearchValue(value)
    
    if (!value) {
      return setSearch('')
    }

    const timeoutId = setTimeout(() => {
      setSearch(value)
    }, DEBOUNCE_TIMEOUT)
    
    setSearchTimeout(timeoutId)
  }

  return (
    <FormContainer onSubmit={e => e.preventDefault()}>
      <SeachInput
        loading={isSearching}
        placeholder="Busque uma categoria  &#x1F50D;"
        type="text"
        name="search_value"
        value={searchValue}
        onChange={e => debounceSearch(e.target.value)} 
      />
      {isSearching && <Loader />}
    </FormContainer>
  )
}