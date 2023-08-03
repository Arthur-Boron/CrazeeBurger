import React from 'react'
import { styled } from 'styled-components'

function Logo() {
  return (
    <LogoStyled>
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
  color: white;
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
  }
`

export default Logo