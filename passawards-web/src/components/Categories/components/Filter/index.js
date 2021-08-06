import Image from 'next/image'
import { useState, useContext } from 'react'

import CategoriesContext from '../../../../contexts/categoriesContext'

import arrowUp from '../../../../../public/img/arrow-up.png'
import arrowDown from '../../../../../public/img/arrow-down.png'

import {
  FilterContainer,
  FilterContent,
  FilterItem,
  FilterTitle
} from './styles'

export default function Filter() {
  const [active, setActive] = useState(true)

  const { 
    filters, 
    selectedFilters, 
    selectFilter, 
    removeFilter, 
    clearSelectedFilters,
    startSearch,
  } = useContext(CategoriesContext)
  
  function handleFilterClick(filterId) {
    startSearch()
    if (selectedFilters.find(id => id === filterId)) {
      return removeFilter(filterId)
    }
    selectFilter(filterId)
  }

  function handleClearFilters() {
    startSearch()
    clearSelectedFilters()
  }
  
  return (
    <FilterContainer>
      <label htmlFor="toggle-btn">
      <FilterTitle active={active}>
          <h3>Filtros</h3>
          <button onClick={() => setActive(!active)} id="toggle-btn">
            <Image src={active ? arrowUp : arrowDown} alt="Toggle fiters" />
          </button>
      </FilterTitle>
      </label>
      <FilterContent active={active}>
      <FilterItem selected={selectedFilters.length === 0} onClick={handleClearFilters}>
            <span>Todos</span>
      </FilterItem>
        {filters.map(filter => (
          <FilterItem selected={selectedFilters.find(id => id === filter.id)} key={filter.id} onClick={() => handleFilterClick(filter.id)}>
            <span>{filter.name}</span>
          </FilterItem>
        ))}
      </FilterContent>
    </FilterContainer>
  )
}