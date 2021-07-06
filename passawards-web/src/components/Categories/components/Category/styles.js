import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 27rem;
  height: 100%;
  margin: 1rem;
  background-color: ${({theme}) => theme.categoryBackground};
  border-radius: 15px;
  @media (max-width: 600px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 95%;
    button {
      height: 3.5rem;
    }
  }
  `

export const ContestantsContainer = styled.ul`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 5px solid ${({theme}) => theme.barBackground};
  width: 100%;
`

export const Contestant = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 0.5rem;
  }
  div {
    margin-bottom: 0.5rem;
    border-radius: 50%;
  }
  span {
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

export const VoteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Sigmar One', cursive;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 0 0 15px 15px;
  background-color: ${({theme}) => theme.barBackground};
  width: 100%;
  span {
    margin: 0 0.3rem ;
  }
  img {
    opacity: 0;
  }
  &:hover {
    color: ${({theme}) => theme.mainBackground};
    img {
      opacity: 1;
      transition: all 0.1s;
    }
  }
  transition: all 0.1s;
`