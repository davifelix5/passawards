import styled from 'styled-components'

export const ContestantLabel = styled.label`
  margin:  0 3rem 1.5rem 3rem;
`

export const ContestantContainer = styled.div`

  background-color: ${({theme}) => theme.categoryBackground};
  border-radius: 15px;
  min-width: 15rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  div img {
    border-radius: 50%;
  }

  h3 {
    color: ${({theme}) => theme.mainText};
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
  border-bottom: ${({hasDescription, theme}) => hasDescription ?
    `0.4rem solid ${theme.barBackground}` : ''};
`

export const ContestantDescription = styled.div`
  padding: 1rem;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  max-width: 20rem;
  align-self: center;
`