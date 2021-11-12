import styled from 'styled-components'

export const CategoriesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Section = styled.section`
  & > h2 {
    display: none;
  }
`

export const Message = styled.div`
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  margin-top: 0.6rem;
`