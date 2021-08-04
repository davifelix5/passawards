import Image from 'next/image'
import { useRouter } from 'next/router'

import {

  CategoryLabel,
  CategoryContainer,
  CategoryDescription,
  ContestantsContainer,
  Contestant,

} from './styles'

import MainButton from '../../../MainButton'

export default function Category({id, title, contestants, children}) {
  
  const router = useRouter()

  function handleVoteClick() {
    router.push(`/vote/${id}`)
  }

  return (
    <CategoryLabel htmlFor={`vote-${id}`}>
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
        <MainButton 
          fontSize="1.5rem" 
          onClick={handleVoteClick} 
          id={`vote-${id}`}
        >
          Votar
        </MainButton>
      </CategoryContainer>
    </CategoryLabel>
  )
}