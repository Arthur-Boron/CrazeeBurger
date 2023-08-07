import React from 'react'
import { theme } from "../../../theme"
import { styled } from 'styled-components'
import NavbarRightSide from './NavbarRightSide'
import NavbarLeftSide from './NavbarLeftSide'

function Navbar() {
    
    return (
        <NavbarStyled>
            <NavbarLeftSide />
            <NavbarRightSide/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background-color: ${theme.colors.white};
    height: ${theme.spacing.xxl};
    display: flex;
    justify-content: space-between;
    padding: 0px ${theme.spacing.md};
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0px;
`

export default Navbar