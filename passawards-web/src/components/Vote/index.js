import { useContext } from 'react'

import Contestant from './components/Contestat'

import {
  CategoryContainer,
  DescriptionContainer,
  ContestatContainer,
} from './styles'

import { 
  Message
} from '../../styles'

import VoteContext from './contexts/voteContext'

import VoteConfirm from './components/VoteConfirm'

import ReactHtmlParser from 'react-html-parser'

export default function Vote({ id, name, contestants, description, videoUrl }) {
  
  const { contestantToVote, success } = useContext(VoteContext)


  return (
    <CategoryContainer>
      {success && (
        <Message>
          Voto registrado com sucesso
        </Message>
      )}
      {contestantToVote && <VoteConfirm />}
      <h1>{name}</h1>
      
      <video controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      <DescriptionContainer>
        {ReactHtmlParser(description)}
      </DescriptionContainer>

      <h2>Participantes</h2>
      
      <ContestatContainer>
        {contestants.map(contestant => (
          <Contestant 
            key={contestant.id}
            id={contestant.id}
            name={contestant.name} 
            image={contestant.image}
          />
        ))}
      </ContestatContainer>

    </CategoryContainer>
  )
}