import styled from 'styled-components'


export const MainWrapper = styled.main`
  min-height: calc(100vh - 11.2rem);
  display: flex;
  flex-direction: column;
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

export const CenterContainer = styled.div`
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

export const Loader = styled.div`

  @keyframes spin {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  margin: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.barBackground};
  border-top: 0.4rem solid ${({theme}) => theme.categoryBackground};
  animation: spin 1s linear infinite;
`

export const Message = styled.div`
  font-family: 'Poppins', sans-serif;
  position: fixed;
  font-size: 1rem;
  z-index: 1000;
  bottom: 0;
  right: 0;
  background-color: green;
  padding: 1.3rem;
  color: #FFF;
`