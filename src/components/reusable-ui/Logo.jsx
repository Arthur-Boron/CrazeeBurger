import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function Logo({className}) {
  return (
    <LogoStyled className={className && className}>
      <h1>
        Crazee
      </h1>
      <img src='/images/logo-burger.png' alt='logo-crazee-burger'/>
      <h1>
        Burger
      </h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 ${theme.gridUnit /2}px;
  }
`

export default Logo