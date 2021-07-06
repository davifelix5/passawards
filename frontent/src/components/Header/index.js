import React from 'react'

import logo from '../../assets/img/logo.png'

import NavLink from './componets/NavLink'

import {
  HeaderContainer,
  Navbar,
} from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <img src = {logo} alt="Logo do Passwards"/>
      <Navbar>
        <ul>
          <NavLink href="/">
            Votar
          </NavLink>
          <NavLink href="/about">
            O que é
          </NavLink>
          <NavLink href="/tutorial">
            Como votar
          </NavLink>
          <NavLink href="/contestants">
            Os competidores
          </NavLink>
        </ul>
      </Navbar>
    </HeaderContainer>
  )
}