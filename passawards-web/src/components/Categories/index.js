import { useContext } from 'react'
import ReactHtmlParser from 'react-html-parser'

import Category from './components/Category'
import SearchForm from './components/SearchForm'

import CategoriesContext from '../../contexts/categoriesContext'

import {
  Message,
  CategoriesContainer,
  Section,
} from './styles'

export default function Categories() {
  const { categories } = useContext(CategoriesContext)
  return (
    <>
      <Section id="search-section">
        <h2>Filtre suas categorias</h2>
        <SearchForm />
      </Section>
      <Section>
        <h2>Categorias</h2>
        <CategoriesContainer>
          {categories.length > 0 ? categories.map(category => (
            <Category key={category.id} id={category.id} title={category.name} contestants={category.contestants.map(contestant => ({
              id: contestant.id, image: contestant.image, name: contestant.name,
            }))}>
              {ReactHtmlParser(category.description)}
            </Category>
          )) : <Message><p>Não há categorias</p></Message>}
        </CategoriesContainer>
      </Section>
    </>
  )
}