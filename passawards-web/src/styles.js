import styled from 'styled-components'


export const MainWrapper = styled.div`
  min-height: calc(100vh - 11.2rem);
  background-color: ${({theme}) => theme.mainBackground};
  padding: 1.5rem 130px;
  @media (max-width: 1135px) {
    padding: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 1135px) {
    width: 90%;
  }
`


export const Title = styled.h2`
  color: ${({theme}) => theme.categoryTitle};
  align-self: flex-start;
  margin: 2rem 0;
  font-family: 'Sigmar One', cursive;
  font-size: 1.8rem;
`


export const Text = styled.p`
  color: #FFF;
  margin: 1rem 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;

`


export const Signature = styled.p`
  color: #FFF;
  margin-top: 2rem;
  font-weight: bold;
  align-self: flex-end;

`

export const ErrorContainer = styled.div`
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 14.2rem);
  h1 {
    font-family: 'Sigmar One', cursive;
    color: ${({theme}) => theme.barBackground};
  }
  p {
    font-size: 1.3rem;
    font-family: 'Patua One', cursive;
  }

`