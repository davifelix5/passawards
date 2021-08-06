import { useContext } from 'react'
import ReactHtmlParser from 'react-html-parser'

import Category from './components/Category'
import Filter from './components/Filter'

import CategoriesContext from '../../contexts/categoriesContext'

import {
  CategoriesContainer,
  CategoriesWrapper,
} from './styles'

export default function Categories() {
  const { categories } = useContext(CategoriesContext)
  return (
    <CategoriesWrapper>
      <Filter />
      <CategoriesContainer>
        {categories.map(category => (
          <Category key={category.id} id={category.id} title={category.name} contestants={category.contestants.map(contestant => ({
            id: contestant.id, image: contestant.image, name: contestant.name,
          }))}>
            {ReactHtmlParser(category.description)}
          </Category>
        ))}
      </CategoriesContainer>
    </CategoriesWrapper>
  )
}