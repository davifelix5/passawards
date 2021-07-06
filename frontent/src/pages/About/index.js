import React from 'react'

import {
  Container,
  Signature,
  Text,
  Title,
} from '../styles'

export default function About() {
  return (
    <Container>
      <Title>Quem está participando</Title>
      <Text>
        O <i>Passawards</i> é uma brincadeira entre colegas de classe que consiste 
        em eleger vencedores de diversas categorias que estão relacionadas com 
        nossas memórias e com os laços que construímos ao longo dos anos juntos. 
      </Text>
      <Text>
        É importante ressaltar que, apesar de esta brincadeira estar no 
        formato de um jogo, o objetivo principal não é a competição, 
        mas a valorização das memórias por trás de cada categoria. 
        Esperamos que gostem!
      </Text>
      <Signature>Terceirão do Colégio J.R. Passalacqua</Signature>
    </Container>
  )
}