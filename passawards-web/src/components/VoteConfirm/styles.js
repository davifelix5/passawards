import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  @media (max-width: 635px) {
    width: 80%;
  }
  position: relative;
`
export const ModalFooter = styled.footer`
  background-color: ${({theme}) => theme.barBackground};
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: center;

`
export const ModalHeader = styled.header`
  border-radius: 15px 15px 0 0;
  padding: 1rem;
  background-color: ${({theme}) => theme.barBackground};
  h3 {
    font-family: 'Sigmar One', cursive;
    font-size: 2rem;
    color: ${({theme}) => theme.categoryBackground}
  }

`

export const ModalBody = styled.div`
  background-color: ${({theme}) => theme.confirmBackground};

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    margin-bottom: 1.3rem;
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
  }

  iframe {
    #rc-anchor-container {
        width: 100px;
    }
  }

`

export const CloseButton = styled.button`
  background: none;
  
  font-family: 'Sigmar One', cursive;
  font-size: 1.2rem;

  color: ${({theme}) => theme.mainBackground};
  
  transition: opacity 0.5s;

  cursor: pointer;

  position: absolute;
  right: 10px;
  top: 0;

  &:hover {
    opacity: 0.7
  }
  &::after {
    content: 'X'
  }
`

export const Feedback = styled.span`
  margin: 0.3rem;
  color: ${({theme}) => theme.strongTitle};
  display: ${({show}) => show ? 'block' : 'none'}
`