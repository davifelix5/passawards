import { useContext } from 'react'

import Image from 'next/image'

import {
  ContestantContainer,
  ContestantInfo,
  ContestantDescription,
} from './styles'

import VoteContext from '../../contexts/voteContext'

import MainButton from '../../../MainButton'

import ReactHtmlParser from 'react-html-parser'


export default function Contestant({ id, name, image, description }) {

  const { setContestantToVote } = useContext(VoteContext)

  return (
    <ContestantContainer>
      <ContestantInfo>
        <Image height={160} width={160} layout="intrinsic" src={image} alt={name} />
        <h3>{name}</h3>
      </ContestantInfo>
      {description && (
        <ContestantDescription>
          {ReactHtmlParser(description)}
        </ContestantDescription>
      )}
      <MainButton onClick={() => setContestantToVote({id, name})}>
        Votar
      </MainButton>
    </ContestantContainer>
  )
}