import { useContext } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'

import VoteContext from '../../contexts/voteContext'

import {
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  Container,
  Feedback,
} from './styles'

import { 
  Loader
} from '../../styles'

import MainButton from '../MainButton'

export default function VoteConfirm() {
  
  const { 
    setContestantToVote,
    setRecaptcha,
    handleVote, 
    loading, 
    message,
    setMessage,
    sitekey,
    success,
  } = useContext(VoteContext)

  function handleCloseModal() {
    setContestantToVote(null)
    setMessage(null)
  }

  return (
    <Container>
      <ModalContainer>
        <CloseButton aria-label="Fechar" onClick={handleCloseModal} />
        <ModalHeader>
          <h3>Passawards alerta:</h3>
        </ModalHeader>

        <ModalBody>
          <p>Por favor, complete a verificação para complementar seu voto</p>
          <ReCAPTCHA
            sitekey={sitekey}
            onChange={setRecaptcha}
            size='compact'
          />
          <Feedback show={message !== '' && !success}>
            {message}
          </Feedback>
        </ModalBody>

        <ModalFooter>
          {loading ? (
            <Loader />
          ) : (
            <MainButton onClick={handleVote} style={{height: '100%'}}>
              Confirmar
            </MainButton>
          )}
        </ModalFooter>
      </ModalContainer>
    </Container>
  )
}