import React from 'react'

import leftBars from '../../../../assets/img/left-bar.png'
import rightBars from '../../../../assets/img/right-bar.png'

import {
  LinkItem
} from './styles'

export default function NavLink({children, href}) {
  return (
    <LinkItem>
      <img src={leftBars} alt="Left bars"/>
      <a href={href}>
        {children}
      </a>
      <img src={rightBars} alt="Right Bars" />
    </LinkItem>
  )
}