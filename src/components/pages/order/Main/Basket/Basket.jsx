import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import Total from './Total'
import Footer from './Footer'
import { formatPrice } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext'
import BasketBody from './BasketBody'
import EmptyBasket from './EmptyBasket'

function Basket() {

  const {basket} = useContext(OrderContext)
  const isBasketEmpty = basket.length == 0

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        {isBasketEmpty ? <EmptyBasket /> : <BasketBody basket={basket}/>}
        <Footer className="footer" />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;

    .footer {
      position: sticky;
      bottom: 0;
    }
`

export default Basket