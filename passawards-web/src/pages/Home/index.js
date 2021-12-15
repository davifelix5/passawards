import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ReactHtmlParser from 'react-html-parser'

import Category from '../../components/Category'
import SearchForm from '../../components/SearchForm'

import ReactPaginate from 'react-paginate'

import {
  Loader,
} from '../../styles'

import {
  Message,
  CategoriesContainer,
  Section,
  PaginationContainer,
} from './styles'

export default function Categories({filters, categoriesData, initialSearch, page}) {

  const router = useRouter()

  const [isSearching, setIsSearching] = useState(false)
  const [search, setSearch] = useState(initialSearch)
  const [selectedFilters, setSelectedFiltes] = useState([])

  const hasCategories = categoriesData.results.length !== 0

  const startSearch = () => setIsSearching(true)
  const stopSearch = () => setIsSearching(false)
  
  function filterCategories(searchValue, selectedFiltersValue, page) {
    startSearch()
    setSearch(searchValue)
    setSelectedFiltes(selectedFiltersValue)
    router.push({
      pathname: '/',
      query: {
        search: searchValue,
        type: selectedFiltersValue.join(','),
        page: page || 1
      },
    })
  }

  function restoreCategories() {
    startSearch()
    setSelectedFiltes([])
    setSearch('')
    router.push({
      pathname: '/'
    })
  }

  function handlePageChange( {selected} ) {
    const page = selected + 1
    filterCategories(search, selectedFilters, page)
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', stopSearch)
    return () => {
      router.events.off('routeChangeComplete')
    }
  })

  return (
    <>
      <Section id="search-section">
        <h2>Filtre suas categorias</h2>
        <SearchForm 
          filters={filters}
          filterCategories={filterCategories}
          restoreCategories={restoreCategories}
          isSearching={isSearching} 
        />
      </Section>
      <Section>
        <h2>Categorias</h2>
        {isSearching && <Loader />}
        
        {!isSearching && hasCategories && (
          <CategoriesContainer>
            {categoriesData.results.map(category => (
              <Category key={category.id} id={category.id} title={category.name} contestants={category.contestants}>
                {ReactHtmlParser(category.description)}
              </Category>
            ))}
          </CategoriesContainer>
        )}
        
        {!isSearching && !hasCategories && (
          <Message>Não há categorias</Message>
        )}
        
        <PaginationContainer>
          <ReactPaginate 
            nextLabel=">"
            previousLabel="<"

            className="pagination-container"
            pageClassName="pagination-page"
            activeClassName="pagination-active"
            nextClassName="pagination-page control"
            previousClassName="pagination-page control"
            breakClassName="pagination-page break"

            marginPagesDisplayed={2}
            pageCount={categoriesData.page_count}
            pageRangeDisplayed={2}
            forcePage={Number(page) - 1 || 0}
          
            onPageChange={handlePageChange}
          />
        </PaginationContainer>
      </Section>
    </>
  )
}