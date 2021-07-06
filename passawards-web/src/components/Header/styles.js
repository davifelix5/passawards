import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.barBackground};
  padding: 10px 130px;
  @media (max-width: 1135px) {
    padding: 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
  & > img:first-child {
    height: 5rem;
    width: auto;
  }
`

export const Navbar = styled.nav`
  ul {
    display: flex;
  }

  @media (max-width: 600px) {
    margin-top: 1rem;
  }

`