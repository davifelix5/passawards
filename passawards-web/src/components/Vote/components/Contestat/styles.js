import styled from 'styled-components'

export const ContestantContainer = styled.div`

  background-color: ${({theme}) => theme.categoryBackground};
  border-radius: 15px;
  min-width: 15rem;
  margin-bottom: 1.5rem;

  div img {
    border-radius: 50%;
  }

  h3 {
    color: ${({theme}) => theme.categoryTitle};
    font-family: 'Patua One', cursive;
    margin-bottom: 0.3rem;
    font-size: 1.7rem;
    margin-top: 2rem;
  }

`

export const ContestantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
  padding-bottom: 1rem;

`

export const ContestantDescription = styled.div`
  border-top: 0.4rem solid ${({theme}) => theme.categoryTitle};
  padding: 1rem;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  max-width: 18rem;
`