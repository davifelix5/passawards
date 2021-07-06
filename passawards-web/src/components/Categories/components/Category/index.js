import Image from 'next/image'

import placeholder from '../../../../../public/img/placeholder.png'

import leftBars from '../../../../../public/img/big-bar-left.png'
import rightBars from '../../../../../public/img/big-bar-right.png'

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
            <Image src={placeholder} alt="Candidato 3" />
            <span>{contestant.name}</span>
          </Contestant>
        ))}     
      </ContestantsContainer>
      <CategoryDescription>
        <h2>{title}</h2>
        {children}
      </CategoryDescription>
      <VoteButton>
        <Image src={leftBars} alt="Bars left" />
        <span>VOTAR</span>
        <Image src={rightBars} alt="Bars right" />
      </VoteButton>
    </CategoryContainer>
  )
}