import Image from 'next/image'

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
            <Image layout='intrinsic' width={100} height={100} src={contestant.image} alt={contestant.name} />
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