import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Navbar({name}) {
    
    return (
        <NavbarStyled>
            <div className='left-side'>
                Left
            </div>
            <div className='right-side'>
                <h1>Bonjour {name}</h1>
                <br />
                <Link to={'/'}>
                    <button>Déconnexion</button>
                </Link>
            </div>
            
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background-color: blue;
    height: 80px;
    display: flex;
    justify-content: space-between;

    .left-side {
        background-color: pink;
    }

    .right-side {   
        background-color: purple;
    }
`

export default Navbar