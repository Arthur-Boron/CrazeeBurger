import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Card from '../../../../reusable-ui/Card'
import {formatPrice} from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext'

function Menu() {

  const {menu, isModeAdmin, handleDeleteProduct} = useContext(OrderContext)
  const IMG_BY_DEFAULT = '/images/coming-soon.png'

  return (
    <MenuStyled>
      {menu.map(product => {
        return (
          <Card key={product.id} 
            title={product.title} 
            imageSource={product.imageSource ? product.imageSource : IMG_BY_DEFAULT} 
            leftDescription={formatPrice(product.price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    padding: 50px 50px 150px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    overflow-y: auto;
`

export default Menu