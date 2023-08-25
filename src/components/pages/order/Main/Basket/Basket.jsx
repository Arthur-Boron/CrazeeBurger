import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function Basket() {
  return (
    <BasketStyled>
        <div className='head'>head</div>
        <div className='body'>body</div>
        <div className='footer'>footer</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;

    .head {
      background-color: ${theme.colors.background_dark};
      height: 70px;
    }

    .body {
      flex: 1;
    }

    .footer {
      background-color: ${theme.colors.background_dark};
      height: 70px;
      border-radius: 0px 0px 0px ${theme.borderRadius.extraRound};
    }
`

export default Basket