import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import Total from './Total'
import Footer from './Footer'
import { formatPrice } from '../../../../../utils/maths'

function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        <div className='body'>body</div>
        <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
  

    .body {
      flex: 1;
      box-shadow: ${theme.shadows.basket};
    }
`

export default Basket