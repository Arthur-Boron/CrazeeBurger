import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Total from './Total'
import Footer from './Footer'
import { formatPrice, replaceFrenchCommaWithDot } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext'
import BasketBody from './BasketBody'
import EmptyBasket from './EmptyBasket'
import { findById } from '../../../../../utils/array'
import { IMG_BY_DEFAULT } from '../../../../../enums/product'

function Basket() {

  const {basket, menu} = useContext(OrderContext)
  const isBasketEmpty = basket.length == 0
  
  const getBasketItemsWithDetails = (basket, menu) => {
    return basket.map(item => {
        const { title, imageSource, price } = findById(item.id, menu);
        const finalImageSource = imageSource && imageSource !== "" ? imageSource : IMG_BY_DEFAULT;
        return {
            ...item,
            title,
            price,
            finalImageSource
        };
    });
  }

  const basketDetails = getBasketItemsWithDetails(basket, menu);

  const amountToPay = basketDetails.reduce((acc, curr) => {
    return acc + (replaceFrenchCommaWithDot(curr.price).toFixed(2) * curr.quantity);
  }, 0);

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(amountToPay)}/>
        {isBasketEmpty ? <EmptyBasket /> : <BasketBody basketDetails={basketDetails}/>}
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