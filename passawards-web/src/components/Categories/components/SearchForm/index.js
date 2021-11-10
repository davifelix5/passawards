import React, { useContext, useRef, useState } from 'react'

import CategoriesContext from '../../../../contexts/categoriesContext'

import { 
  FilterInput,
  FiltersContainer,
  FilterInputLabel,
  FilterInputWrapper,
  FilterList,
  FiltersLabel,
  FormContainer,
  Loader,
  ResetButton,
  SubmitButton,
  TextInput,
  TextInputContainer, 
  CheckboxContainer,
  Checkmark
} from './styles'

export default function SearchForm() {
  const { 
    filters,
    isSearching,
    filterCategories,
    restoreCategories,
  } = useContext(CategoriesContext)

  const [filtered, setFiltered] = useState(false)

  const formRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    
    const data = Array.from(formData)
    const [, search] = data.pop()
    const filters = data.map(entry => entry[1])
    
    const emptySearch = !Boolean(search)
    const emptyFilters = !Boolean(filters.length)

    console.log(emptySearch)
    console.log(emptyFilters)

    if (emptySearch && emptyFilters) {
      return
    }

    filterCategories(search, filters).then(() => {
      setFiltered(true)
    })
  }

  function handleReset() {
    restoreCategories().then(() => {
      setFiltered(false)
      formRef.current.reset()
    })
  }

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>

      <FiltersContainer>
        
        <FiltersLabel>Filtros</FiltersLabel>

        <FilterList>
          {filters.map(filter => {
            return (
              <FilterInputWrapper key={filter.id}>
                <FilterInputLabel htmlFor={filter.id}>
                  {filter.name}
                </FilterInputLabel>
                <CheckboxContainer htmlFor={filter.id}>
                  <FilterInput value={filter.id} name="filter" type="checkbox" id={filter.id} />
                  <Checkmark />
                </CheckboxContainer>
              </FilterInputWrapper>
            )
          })}
        </FilterList>

      </FiltersContainer>

      <TextInputContainer>
        <TextInput name="search" type="text" placeholder="Pesquisar entre as categorias" />
        {!isSearching && <SubmitButton disabled={isSearching}>Pesquisar</SubmitButton>}
        {isSearching && <Loader />}
      </TextInputContainer>

      {filtered && !isSearching && (
        <ResetButton 
          disabled={isSearching}
          onClick={handleReset}
          type="button"
        >
            Resetar Filtros
        </ResetButton>
      )}

    </FormContainer>
  )
}