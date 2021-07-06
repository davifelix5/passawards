import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.barBackground};
  font-family: 'Nunito ', sans-serif;
` 