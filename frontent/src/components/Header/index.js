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
          <NavLink href="#">
            O que é
          </NavLink>
          <NavLink href="#">
            Objetivos
          </NavLink>
          <NavLink href="#">
            Como votar
          </NavLink>
          <NavLink href="#">
            Os competidores
          </NavLink>
        </ul>
      </Navbar>
    </HeaderContainer>
  )
}