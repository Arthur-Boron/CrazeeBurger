import React from 'react'
import { styled } from 'styled-components'
import { theme } from "../../../theme"
import Profile from './Profile'

function NavbarRightSide({name}) {
  return (
    <NavbarRightSideStyled>
        <div>AdminButton</div>
        <Profile name={name}/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right:  ${theme.spacing.xl};
`

export default NavbarRightSide