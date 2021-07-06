import React from 'react'

import placeholder from '../../../../assets/img/placeholder.png'

import leftBars from '../../../../assets/img/big-bar-left.png'
import rightBars from '../../../../assets/img/big-bar-right.png'

import {
  
  CategoryContainer,
  CategoryDescription,
  ContestantsContainer,
  Contestant,
  VoteButton,

} from './styles'

export default function Category({title, contestants, children}) {
  return (
    <CategoryContainer>
      <ContestantsContainer>
        {contestants.map(contestant => (
          <Contestant key={contestant.name}>
            <img src={placeholder} alt="Candidato 3" />
            <span>{contestant.name}</span>
          </Contestant>
        ))}     
      </ContestantsContainer>
      <CategoryDescription>
        <h2>{title}</h2>
        {children}
      </CategoryDescription>
      <VoteButton>
        <img src={leftBars} alt="Bars left" />
        <span>VOTAR</span>
        <img src={rightBars} alt="Bars right" />
      </VoteButton>
    </CategoryContainer>
  )
}