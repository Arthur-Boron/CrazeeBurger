import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function NavbarRightSide({name}) {
  return (
    <NavbarRightSideStyled>
        <h1>Bonjour {name}</h1>
        <br />
        <Link to={'/'}>
            <button>Déconnexion</button>
        </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    background-color: purple;
`

export default NavbarRightSide