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
      <Title>Como votar</Title>
      <Text>
        A votação é livre para quem quiser e pode ser feita repetidas vezes, 
        apenas com uma simples verificação por reCAPTCHA.
      </Text>
      <Text>
        Cada categoria está acompanhada de um vídeo introdutório e de fotos de 
        cada um dos concorrentes, faça sua escolha sabiamente!
      </Text>
      <Signature>Terceirão do Colégio J.R. Passalacqua</Signature>
    </Container>
  )
}