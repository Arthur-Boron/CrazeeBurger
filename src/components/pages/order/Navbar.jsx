import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Navbar({name}) {
    
    return (
        <NavbarStyled>
            <h1>Bonjour {name}</h1>
            <br />
            <Link to={'/'}>
                <button>Déconnexion</button>
            </Link>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background-color: blue;
    height: 80px;
`

export default Navbar