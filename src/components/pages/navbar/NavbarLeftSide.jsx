import React from 'react'
import { styled } from 'styled-components'
import Logo from '../../reusable-ui/Logo'
import { refreshPage } from '../../../utils/window'

function NavbarLeftSide() {

  const handleOnClick = () => {
    refreshPage()
  }

  return (
    <NavbarLeftSideStyled>
        <Logo className="logo-navbar" onClick={handleOnClick}/>
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
    display: flex;

  .logo-navbar {
    cursor: pointer;
  }
`

export default NavbarLeftSide