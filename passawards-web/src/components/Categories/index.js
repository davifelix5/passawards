import { useContext } from 'react'
import ReactHtmlParser from 'react-html-parser'

import Category from './components/Category'
import SearchForm from './components/SearchForm'

import CategoriesContext from '../../contexts/categoriesContext'

import {
  Message,
  CategoriesContainer,
  CategoriesWrapper,
} from './styles'

export default function Categories() {
  const { categories } = useContext(CategoriesContext)
  return (
    <CategoriesWrapper>
      <SearchForm />
      <CategoriesContainer>
        {categories.length > 0 ? categories.map(category => (
          <Category key={category.id} id={category.id} title={category.name} contestants={category.contestants.map(contestant => ({
            id: contestant.id, image: contestant.image, name: contestant.name,
          }))}>
            {ReactHtmlParser(category.description)}
          </Category>
        )) : <Message><p>Não há categorias</p></Message>}
      </CategoriesContainer>
    </CategoriesWrapper>
  )
}