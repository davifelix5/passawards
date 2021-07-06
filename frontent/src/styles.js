import styled from 'styled-components'


export const MainWrapper = styled.div`
  min-height: calc(100vh - 6.4rem);
  background-color: ${({theme}) => theme.mainBackground};
  padding: 10px 130px;
  @media (max-width: 1135px) {
    padding: 10px;
  }
`