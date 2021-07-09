import Contestant from './components/Contestat'

import {
  CategoryContainer,
  DescriptionContainer,
  ContestatContainer,
} from './styles'

import ReactHtmlParser from 'react-html-parser'

export default function Category({ name, contestants, description, videoUrl }) {
  return (
    <CategoryContainer>
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
          <Contestant key={contestant.id} name={contestant.name} image={contestant.image} />
        ))}
      </ContestatContainer>

    </CategoryContainer>
  )
}