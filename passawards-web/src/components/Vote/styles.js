import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1, h2 {
    color: ${({theme}) => theme.categoryTitle};
    font-family: 'Sigmar One', cursive;
    margin-bottom: 0.3rem;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }

  video {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 665px) {
    video {
      width: 90%;
    }
  }

`

export const DescriptionContainer = styled.div`

  margin: 1rem 0;

  p {
    color: #FFF;
    margin: 0.3rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    line-height: 1.75;
  }

`

export const ContestatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`