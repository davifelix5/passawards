
import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    width: 95%;
  }
`

export const ResetButton = styled.button`
  padding: 0.4rem;
  margin-top: 1rem;
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  background-color: ${({theme}) => theme.barBackground};
  border-radius: 5px;
  cursor: pointer;
`

export const FiltersContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.filterBackground};
  border-radius: 10px;
`

export const FiltersLabel = styled.span`
  margin-right: 0.5rem;
  border-right: 1px solid black;
  font-size: 1.3rem;
  padding: 1rem;
`

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const FilterInputWrapper = styled.li`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  `

export const FilterInputLabel = styled.label`
  cursor: pointer;
  margin-right: 1rem;
  margin-left: 0.5rem;
  user-select: none;
  &:hover + label {
    border-color: ${({theme}) => theme.mainBackground}
  }
`

export const FilterInput = styled.input`
  display: none;
  &:checked + span {
    display: block;
  }
`

export const CheckboxContainer = styled.label`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: relative;
  border: 1px solid black;
  user-select: none;
  cursor: pointer;
  &:hover {
    border-color: ${({theme}) => theme.mainBackground}
  }
  `

export const Checkmark = styled.span`
  display: none;
  content: " ";
  width: 1rem;
  height: 1rem;
  bottom: 0;
  left: 0;
  transform: translate(-1px, 1px);
  border-radius: 50%;
  position: absolute;
  background-color: ${({theme}) => theme.mainBackground};
`

export const TextInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const TextInput = styled.input`
  border-radius: 15px;
  padding: 0.6rem;
  background-color: ${({theme}) => theme.searchBackground};
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  width: 70%;
`
export const SubmitButton = styled.button`
  width: 20%;
  margin-left: 0.5rem;
  cursor: pointer;
  background-color: ${({theme}) => theme.barBackground};
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
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
  
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.barBackground};
  border-top: 0.4rem solid ${({theme}) => theme.categoryBackground};
  animation: spin 1s linear infinite;

  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  animation: spin 1s linear infinite;
`