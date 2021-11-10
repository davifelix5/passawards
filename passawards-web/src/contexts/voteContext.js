import { createContext, useState } from 'react'

import api from '../services/api'

const VoteContext = createContext({})

export default VoteContext

export function VoteContextProvider({ children, categoryId, sitekey }) {

  const [recaptcha, setRecaptcha] = useState('')
  const [contestant, setContestant] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  
  function setContestantToVote(contestant) {
    setContestant(contestant)
  }

  async function handleVote() {
    setLoading(true)
    setMessage('')
    try {
      await api.post('/vote/', {
        category: categoryId,
        contestant: contestant.id,
        recaptcha,
      })
      setContestant(null)
      setSuccess(true)
      setMessage(`Voto em ${contestant.name} confimado!`)
      setTimeout(() => {
        setSuccess(false)
        setMessage('')
      }, 2000);
    } catch (err) {
      setMessage('reCAPTCHA inválido: tente novamente!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <VoteContext.Provider value={{
      recaptcha, setRecaptcha,
      handleVote,
      loading,
      setContestantToVote, contestantToVote: contestant,
      message, setMessage,
      sitekey,
      success,
    }} >
      {children}
    </VoteContext.Provider>
  )
}