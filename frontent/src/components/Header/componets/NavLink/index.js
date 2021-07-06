import React from 'react'
import { Link } from 'react-router-dom'

import leftBars from '../../../../assets/img/left-bar.png'
import rightBars from '../../../../assets/img/right-bar.png'

import {
  LinkItem
} from './styles'

export default function NavLink({children, href}) {
  return (
    <LinkItem>
      <img src={leftBars} alt="Left bars"/>
      <Link to={href}>
        {children}
      </Link>
      <img src={rightBars} alt="Right Bars" />
    </LinkItem>
  )
}