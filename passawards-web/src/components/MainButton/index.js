import Image from 'next/image'

import {
  Button,
} from './styles'

import leftBars from '../../../public/img/big-bar-left.png'
import rightBars from '../../../public/img/big-bar-right.png'

export default function MainButton({ onClick, children, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      <Image src={leftBars} layout="intrinsic" alt="Bars left" />
      <span>{children}</span>
      <Image src={rightBars} layout="intrinsic" alt="Bars right" />
    </Button>
  )
}