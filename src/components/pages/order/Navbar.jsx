import React from 'react'
import { theme } from "../../../theme"
import { styled } from 'styled-components'
import NavbarRightSide from './NavbarRightSide'
import NavbarLeftSide from './NavbarLeftSide'

function Navbar({name}) {
    
    return (
        <NavbarStyled>
            <NavbarLeftSide />
            <NavbarRightSide name={name} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background-color: ${theme.colors.background_white};
    height: ${theme.spacing.xxl};
    display: flex;
    justify-content: space-between;
    padding: 0px ${theme.spacing.md};
`

export default Navbar