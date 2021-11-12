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
    <CategoryContainer>
      <CategoryLabel htmlFor={`vote-${id}`}>
        <ContestantsContainer>
          {contestants.map(contestant => (
            <li key={contestant.name}>
              <Contestant>
                <Image layout='intrinsic' width={100} height={100} src={contestant.image} alt={contestant.name} />
                <figcaption>{contestant.name}</figcaption>
              </Contestant>
            </li>
          ))}
        </ContestantsContainer>
        <CategoryDescription>
          <h3>{title}</h3>
          {children}
        </CategoryDescription>
        <MainButton 
          fontSize="1.5rem" 
          onClick={handleVoteClick} 
          id={`vote-${id}`}
          aria-label="Votar"
        >
          Votar
        </MainButton>
      </CategoryLabel>
    </CategoryContainer>
  )
}