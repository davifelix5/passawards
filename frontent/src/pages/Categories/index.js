import React from 'react'

import Category from './components/Category'
import Filter from './components/Filter'

import {
  CategoriesContainer,
  CategoriesWrapper,
} from './styles'

export default function Categories() {
  return (
    <CategoriesWrapper>
      <Filter />
      <CategoriesContainer>
        <Category title="Professor que mais passsa trabalho" contestants={[
          {name: 'Gabriel'}, {name: 'Gabriel R.'}, {name: 'ROMERO, G.'},
        ]}>
          <p>
            Vote naquele professor que mais encheu sua agenda com <strong>diversos trabalhos</strong>
          </p>
        </Category>
        
        <Category title="Melhor bêbado" contestants={[
          {name: 'Luiz Gabriel'}, {name: 'Luan'}, {name: 'Gabriel'}
        ]}>
          <p>
            Essa categoria busca o <strong>bêbado mais emblemático </strong> 
            da sala. A concorrência não é pouca. Você com sabedoria....
          </p>
        </Category>
        
        <Category title="Melhor frase de efeito" contestants={[
          {name: 'Balbino'}, {name: 'Valter'}, {name: 'Milton'}
        ]}>
          <p>
            Os <strong>professores</strong> não poderiam ficar de fora do Passawards. 
            Eles também são humanos e, assim como nós, têm hábitos que os tornam únicos, 
            sendo um deles as suas <strong>frases de efeito</strong>.
          </p>
          <p>
            Essa categoria elegerá a <strong>melhor frase de efeito</strong> entre as concorrentes. 
            Pense bem antes de votar
          </p>
        </Category>
        <Category title="Melhor frase de efeito" contestants={[
          {name: 'Balbino'}, {name: 'Valter'}, {name: 'Milton'}
        ]}>
          <p>
            Os <strong>professores</strong> não poderiam ficar de fora do Passawards. 
            Eles também são humanos e, assim como nós, têm hábitos que os tornam únicos, 
            sendo um deles as suas <strong>frases de efeito</strong>.
          </p>
          <p>
            Essa categoria elegerá a <strong>melhor frase de efeito</strong> entre as concorrentes. 
            Pense bem antes de votar
          </p>
        </Category>
      </CategoriesContainer>
    </CategoriesWrapper>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           