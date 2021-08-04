import { useContext } from 'react'

import Image from 'next/image'

import {
  ContestantLabel,
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
    <ContestantLabel htmlFor={`vote-${id}`}>
      <ContestantContainer>
        <ContestantInfo hasDescription={description}>
          <Image height={160} width={160} layout="intrinsic" src={image} alt={name} />
          <h3>{name}</h3>
        </ContestantInfo> 
        {description && (
          <ContestantDescription>
            {ReactHtmlParser(description)}
          </ContestantDescription>
        )}
        <MainButton onClick={() => setContestantToVote({id, name})} id={`vote-${id}`}>
          Votar
        </MainButton>
      </ContestantContainer>
    </ContestantLabel>
  )
}