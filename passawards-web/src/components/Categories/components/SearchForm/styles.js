import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  width: 30rem;
  @media (max-width: 400px) {
    width: 95%;
  }
`

export const SeachInput = styled.input`
  border-radius: 15px;
  padding: 0.6rem;
  background-color: ${({theme}) => theme.searchBackground};
  color: #000;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  width: ${({loading}) => loading ? '90%' : '100%'};
`

export const Loader = styled.div`
  width: 10%;
  @keyframes spin {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  animation: spin 1s linear infinite;

  margin: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.barBackground};
  border-top: 0.4rem solid ${({theme}) => theme.categoryBackground};
  animation: spin 1s linear infinite;

`

