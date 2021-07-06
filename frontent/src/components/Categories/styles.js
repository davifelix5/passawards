import styled from 'styled-components'

export const CategoriesContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 6.4rem);
  background-color: ${({theme}) => theme.mainBackground};
  padding: 10px 130px;
  @media (max-width: 1135px) {
    padding: 10px;
  }
`