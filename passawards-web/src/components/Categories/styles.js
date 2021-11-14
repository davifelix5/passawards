import styled from 'styled-components'

export const CategoriesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`

export const Section = styled.section`
  & > h2 {
    display: none;
  }
  flex: 1;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Message = styled.div`
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  margin-top: 0.6rem;
`

export const PaginationContainer = styled.div`
  display: flex;

  .pagination-container {
    background-color: ${({theme}) => theme.filterBackground};
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 5px;
  }
  
  .pagination-page {
    margin: 0 1rem;
    a {
      padding: 0.5rem;
      color: black;
      display: block;
      width: 100%;
    }

    &.break {
      a {
        color: ${({theme}) => theme.categoryBackground};
      }
    }

    &:not(.control):hover a {
      text-decoration: underline;
    }

    cursor: pointer;
    user-select: none;
  }

  .pagination-active {
    border: 1px solid ${({theme}) => theme.mainBackground};
    a {
    }
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
  
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.barBackground};
  border-top: 0.4rem solid ${({theme}) => theme.categoryBackground};
  
  animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
`