import React, { useContext, useRef, useState } from 'react'

import CategoriesContext from '../../../../contexts/categoriesContext'

import { 
  FilterInput,
  FiltersContainer,
  FilterInputLabel,
  FormContainer,
  Loader,
  ResetButton,
  SubmitButton,
  TextInputContainer, 
  CheckboxContainer,
  Checkmark,
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
    const filters = formData.getAll('filter')
    const search = formData.get('search')
    
    const emptySearch = !Boolean(search)
    const emptyFilters = !Boolean(filters.length)

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
      <fieldset>
        <legend>Dados da categoria</legend>
        <FiltersContainer>
          
          <strong>Filtros</strong>

          <ul>
            {filters.map(filter => {
              return (
                <li key={filter.id}>
                  <FilterInputLabel htmlFor={filter.id}>
                    {filter.name}
                  </FilterInputLabel>
                  <CheckboxContainer htmlFor={filter.id}>
                    <FilterInput 
                      value={filter.id} 
                      name="filter" 
                      type="checkbox" 
                      id={filter.id} 
                    />
                    <Checkmark />
                  </CheckboxContainer>
                </li>
              )
            })}
          </ul>

        </FiltersContainer>

        <TextInputContainer>
          <input 
            name="search" 
            type="search" 
            placeholder="Pesquisar entre as categorias"
            aria-label="Parâmetro de busca para a categoria"
          />
          {!isSearching && <SubmitButton disabled={isSearching}>Pesquisar</SubmitButton>}
          {isSearching && <Loader />}
        </TextInputContainer>

        {filtered && !isSearching && (
          <ResetButton 
            disabled={isSearching}
            onClick={handleReset}
            type="reset"
          >
              Resetar Filtros
          </ResetButton>
        )}
      </fieldset>

    </FormContainer>
  )
}