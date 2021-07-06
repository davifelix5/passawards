import React, { useState } from 'react'

import arrowUp from '../../../../assets/img/arrow-up.png'
import arrowDown from '../../../../assets/img/arrow-down.png'

import {
  FilterContainer,
  FilterContent,
  FilterItem,
  FilterTitle
} from './styles'

export default function Filter() {
  const [active, setActive] = useState(true)
  return (
    <FilterContainer>
      <FilterTitle active={active}>
        <h3>Filtros</h3>
        <button onClick={() => setActive(!active)}>
          <img src={active ? arrowUp : arrowDown} alt="Toggle fiters" />
        </button>
      </FilterTitle>
      <FilterContent active={active}>
        <FilterItem className="selected">
          <div></div>
          <span>Todos</span>
        </FilterItem>
        <FilterItem>
          <div></div>
          <span>Sérios</span>
        </FilterItem>
        <FilterItem>
          <div></div>
          <span>Zoeira</span>
        </FilterItem>
        <FilterItem>
          <div></div>
          <span>Professores</span>
        </FilterItem>
      </FilterContent>
    </FilterContainer>
  )
}