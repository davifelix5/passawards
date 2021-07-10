import { createContext, useState } from 'react'

import api from '../../../services/api'

const VoteContext = createContext({})

export default VoteContext

export function VoteContextProvider({ children, categoryId, sitekey }) {

  const [recaptcha, setRecaptcha] = useState('')
  const [contestantId, setContestantId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  
  function setContestantToVote(id) {
    setContestantId(id)
  }

  async function handleVote() {
    setLoading(true)
    setMessage('')
    try {
      await api.post('/vote/', {
        category: categoryId,
        contestant: contestantId,
        recaptcha,
      })
      setContestantId(null)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 2000);
    } catch (err) {
      setMessage('Erro ao votar: Dados inválidos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <VoteContext.Provider value={{
      recaptcha, setRecaptcha,
      handleVote,
      loading,
      setContestantToVote, contestantToVote: contestantId,
      message, setMessage,
      sitekey,
      success,
    }} >
      {children}
    </VoteContext.Provider>
  )
}