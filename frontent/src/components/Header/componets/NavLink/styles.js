import styled from 'styled-components'

export const LinkItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    & + li {
      margin-left: 1.2rem;
    }
    a {
      font-size: 1rem;
      margin: 0 0.5rem;
      color: #000;
      display: flex;
    }
    img {
      opacity: 0;
    }

    &:hover {
      a {
        color: ${({theme}) => theme.mainBackground};
      }
      img {
        opacity: 1
      }
    }

`
