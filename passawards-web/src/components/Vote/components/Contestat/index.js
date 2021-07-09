import Image from 'next/image'

import {
  ContestantContainer,
  ContestantInfo,
} from './styles'

import VoteButton from '../../../VoteButton'

export default function Contestant({ name, image }) {
  return (
    <ContestantContainer>
      <ContestantInfo>
        <Image height={160} width={160} layout="intrinsic" src={image} alt={name} />
        <h3>{name}</h3>
      </ContestantInfo>
      <VoteButton />
    </ContestantContainer>
  )
}