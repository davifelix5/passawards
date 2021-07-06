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
    & > div {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    a + div {
      order: -1;
    }

    div div {
      opacity: 0;
    }

    a:hover {
      color: ${({theme}) => theme.mainBackground};
      & ~ div div {
        opacity: 1
      }
    }

    @media (max-width: 850px) {
      a ~ div {
        display: none;
      }
    }
`
