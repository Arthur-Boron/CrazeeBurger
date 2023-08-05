import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Menu from '../menu/Menu'
import Basket from '../basket/Basket'

function Main() {
  return (
    <MainStyled>
      <Basket />
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    flex-grow: 1;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-columns: 25% 75%;
`

export default Main