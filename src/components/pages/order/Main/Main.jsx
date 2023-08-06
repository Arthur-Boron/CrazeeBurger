import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../theme'
import Basket from './Basket/Basket'
import Menu from './Menu/Menu'
import Admin from './Admin/Admin'


function Main() {
  return (
    <MainStyled>
      <Basket />
      <div className='menu-and-admin'>
        <Menu />
        <Admin />
      </div>
      
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    height: calc(95vh - ${theme.spacing.xxl});
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-columns: 25% 75%;
    

    .menu-and-admin {
      position: relative;
      display: grid;
      overflow-y: hidden;
      //border radius needs to change when basket is closed
      border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    }
`

export default Main