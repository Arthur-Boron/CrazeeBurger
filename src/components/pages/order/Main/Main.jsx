import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../theme'
import Basket from './Basket/Basket'
import Menu from './Menu/Menu'
import Admin from './Admin/Admin'
import OrderContext from '../../../../context/OrderContext'


function Main() {

  const {isModeAdmin} = useContext(OrderContext)

  return (
    <MainStyled>
      <Basket />
      <div className='menu-and-admin'>
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
      
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    height: calc(95vh - ${theme.spacing.xxl});
    box-shadow: ${theme.shadows.strong};
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    display: grid;
    overflow: hidden;
    grid-template-columns: 25% 75%;
    

    .menu-and-admin {
      position: relative;
      display: grid;
      overflow-y: hidden;
      //border radius needs to change when basket is closed
      border-radius: 0px 0px ${theme.borderRadius.extraRound} 0px;
    }
`

export default Main