import React, { useRef, useState } from 'react'

import { 
  FiltersContainer,
  FilterInputLabel,
  FormContainer,
  ResetButton,
  SubmitButton,
  TextInputContainer, 
  CheckboxContainer,
} from './styles'

export default function SearchForm({
  filters,
  filterCategories,
  restoreCategories,
  isSearching
}) {

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

    filterCategories(search, filters)
    setFiltered(true)
  }

  function handleReset() {
    restoreCategories()
    setFiltered(false)
    formRef.current.reset()
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
                    <input 
                      value={filter.id} 
                      name="filter" 
                      type="checkbox" 
                      id={filter.id} 
                    />
                    <span></span>
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
          <SubmitButton disabled={isSearching}>Pesquisar</SubmitButton>
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