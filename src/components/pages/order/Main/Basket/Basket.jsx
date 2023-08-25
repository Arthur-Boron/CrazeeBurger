import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import Total from './Total'
import Footer from './Footer'
import { formatPrice } from '../../../../../utils/maths'
import EmptyBasket from './EmptyBasket'

function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        <EmptyBasket />
        <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export default Basket