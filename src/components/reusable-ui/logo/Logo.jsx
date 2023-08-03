import React from 'react'
import { styled } from 'styled-components'

function Logo() {
  return (
    <LogoStyled>
      Crazee Burger
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  background: darkgreen;
`

export default Logo