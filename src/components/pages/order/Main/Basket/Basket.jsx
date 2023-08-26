import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Total from './Total'
import Footer from './Footer'
import { formatPrice, replaceFrenchCommaWithDot } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext'
import BasketBody from './BasketBody'
import EmptyBasket from './EmptyBasket'

function Basket() {

  const {basket} = useContext(OrderContext)
  const isBasketEmpty = basket.length == 0

  const amountToPay = basket.reduce((acc, curr) => {
    console.log(curr.price, replaceFrenchCommaWithDot(curr.price).toFixed(2))
    return acc + (replaceFrenchCommaWithDot(curr.price).toFixed(2) * curr.quantity)
  }, 0)

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(amountToPay)}/>
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