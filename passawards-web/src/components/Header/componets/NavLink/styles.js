import styled from 'styled-components'

export const LinkItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    a.active {
      color: ${({theme}) => theme.mainBackground};
    }

    a {
      cursor: pointer;
      font-family: 'Nunito', sans-serif;
      font-size: 1.3rem;
      margin: 0 0.5rem;
      color: #000;
      display: flex;
    }
    a + img {
      order: -1;
    }

    img {
      opacity: 0;
    }

    a:hover {
      color: ${({theme}) => theme.mainBackground};
      & ~ img {
        opacity: 1
      }
    }

    @media (max-width: 850px) {
      img {
        display: none;
      }
    }

`
