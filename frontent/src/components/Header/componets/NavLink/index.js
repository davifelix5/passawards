import React, { useContext } from 'react'
import { NavLink as NLink } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import leftBars from '../../../../assets/img/left-bar.png'
import rightBars from '../../../../assets/img/right-bar.png'

import {
  LinkItem
} from './styles'

export default function NavLink({children, href}) {
    const { mainBackground } = useContext(ThemeContext)
  return (
    <LinkItem>
      <NLink exact activeStyle={{color: mainBackground}} to={href} id={href}>
        {children}
      </NLink>
      <img src={leftBars} className="left" alt="Left bars"/>
      <img src={rightBars} alt="Right Bars" />
    </LinkItem>
  )
}