import React, { useState } from 'react'
import { styled } from 'styled-components'
import { fakeMenu } from '../../../../../fakeData/fakeMenu'
import Card from '../../../../reusable-ui/Card'
import {formatPrice} from '../../../../../utils/maths'

function Menu() {

  const [menu, setFakeMenu] = useState(fakeMenu.LARGE)

  return (
    <MenuStyled>
      {menu.map(product => {
        return (
          <Card key={product.id} 
            title={product.title} 
            imageSource={product.imageSource} 
            leftDescription={formatPrice(product.price)}
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