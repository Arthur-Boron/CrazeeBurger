import React from 'react'
import { styled } from 'styled-components'
import Logo from '../../reusable-ui/Logo'

function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
        <Logo />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
    display: flex;
`

export default NavbarLeftSide