import { useContext } from 'react'

import Image from 'next/image'

import {
  ContestantContainer,
  ContestantInfo,
} from './styles'

import VoteContext from '../../contexts/voteContext'

import MainButton from '../../../MainButton'


export default function Contestant({ id, name, image }) {

  const { setContestantToVote } = useContext(VoteContext)

  return (
    <ContestantContainer>
      <ContestantInfo>
        <Image height={160} width={160} layout="intrinsic" src={image} alt={name} />
        <h3>{name}</h3>
      </ContestantInfo> 
      <MainButton onClick={() => setContestantToVote(id)}>
        Votar
      </MainButton>
    </ContestantContainer>
  )
}