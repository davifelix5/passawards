import styled from 'styled-components'

export const FilterContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  margin: 2rem 0;
  flex-direction: row;
  justify-content: center;
  background-color: ${({theme}) => theme.filterBackground};
  border-radius: 15px;
  @media (max-width: 400px) {
    width: 95%;
    flex-direction: column;
    margin: 2rem;
  }

`

export const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  h3 {
    padding: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
  }
  button {
    cursor: pointer;
    background: none;
    display: none;
  }
  @media (max-width: 400px) {
    border-bottom: ${({active}) => active ? '1px solid black' : 'none'};
    border-right: none;
    button {
      display: block;
    }
  }

`

export const FilterContent = styled.div`
  display: ${({active}) => active ? 'flex' : 'none'};
  transition: all 0.5s;
  max-width: 95%;
  flex-wrap: wrap;
  padding: 0 1rem;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    padding: 1rem;
  }
  @media (min-width: 400px) {
    display: flex;
  }
`

export const FilterItem = styled.button`
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 1.2rem;
  }
  &.selected div {
    background-color: ${({theme}) => theme.mainBackground}
  }
  &:hover {
    div {
      border-color: ${({theme}) => theme.mainBackground}
    }
  }
  div {
    margin-right: 0.6rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid black;
  }
  span {
    font-size: 1.2rem;
  }
`