import React from 'react'
import { styled } from 'styled-components'
import { theme } from "../../../theme"
import Profile from './Profile'
import ToggleButton from '../../reusable-ui/ToggleButton'

function NavbarRightSide({name}) {
  return (
    <NavbarRightSideStyled>
        <ToggleButton labelIfChecked={"DÉSACTIVER LE MODE ADMIN"} labelIfUnchecked={"ACTIVER LE MODE ADMIN"}/>
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