import React from 'react'
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
    background-color: blue;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0px 80px 0px 20px;
`

export default Navbar