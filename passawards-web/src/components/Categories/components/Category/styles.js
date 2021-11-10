import styled from 'styled-components'

export const CategoryLabel = styled.label`
  cursor: pointer;
  margin: 1rem;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 30rem;
  background-color: ${({theme}) => theme.categoryBackground};
  border-radius: 15px;
  @media (max-width: 500px) {
    width: 95%;
  }
  `

export const ContestantsContainer = styled.ul`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 5px solid ${({theme}) => theme.barBackground};
  width: 100%;
`

export const Contestant = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  div {
    margin-bottom: 0.5rem;
    border-radius: 50%;                                     
  }
  span {
    text-align: center;
    color: #FFF;
    font-family: 'Sigmar One', cursive;
  }
`

export const CategoryDescription = styled.div`
  padding: 1rem;
  h2 {
    color: ${({theme}) => theme.categoryTitle};
    font-family: 'Patua One', cursive;
    margin-bottom: 0.3rem;
    font-size: 1.7rem;
  }
  p {
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.75;
  }

`