import styled from 'styled-components'


export const FormContainer = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    legend {
      display: none;
    }
  }
`

export const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.filterBackground};
  border-radius: 10px;
  
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  strong {
    margin-right: 0.5rem;
    border-right: 1px solid black;
    padding: 1rem;
  
    font-size: 1.3rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
  }
`

export const FilterInputLabel = styled.label`
  margin-right: 1rem;
  margin-left: 0.5rem;
  
  cursor: pointer;
  
  user-select: none;
  
  &:hover + label {
    border-color: ${({theme}) => theme.mainBackground}
  }
`

export const CheckboxContainer = styled.label`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid black;
  
  position: relative;

  user-select: none;
  cursor: pointer;

  &:hover {
    border-color: ${({theme}) => theme.mainBackground}
  }

  input {
    display: none;
    &:checked + span {
      display: block;
    }
  }

  span {
    background-color: ${({theme}) => theme.mainBackground};
    height: 1rem;
    width: 1rem;
    border-radius: 50%;

    display: none;

    position: absolute;
    bottom: 0;
    left: 0;

    transform: translate(-1px, 1px);
  }
`

export const TextInputContainer = styled.div`
  justify-content: center;
  display: flex;
  
  width: 35rem;
  margin-top: 1rem;

  @media (max-width: 400px) {
    width: 100%;
  }

  input {
    background-color: ${({theme}) => theme.searchBackground};
    border-radius: 15px;
    padding: 0.6rem;
    width: 70%;
    
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    
  }
`

export const SubmitButton = styled.button`
  background-color: ${({theme}) => theme.barBackground};
  width: 20%;
  margin-left: 0.5rem;
  border-radius: 5px;
  
  cursor: pointer;
  
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: ${({theme}) => theme.mainBackground}
  }
`


export const ResetButton = styled.button`
  background-color: ${({theme}) => theme.barBackground};
  padding: 0.4rem;
  margin: 1rem 0;
  border-radius: 5px;
  
  cursor: pointer;

  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
`