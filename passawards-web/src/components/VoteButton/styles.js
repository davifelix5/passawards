import styled from 'styled-components'

export const Button = styled.button`
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
  
  @media (max-width: 665px) {
    img {
      width: 2rem;
    }
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