import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import { fakeMenu2 } from '../../../../../fakeData/fakeMenu'
import Card from '../../../../reusable-ui/Card'

function Menu() {

  const [menu, setFakeMenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {menu.map(product => {
        return (
          <Card key={product.id} title={product.title} imageSource={product.imageSource} leftDescription={product.price}/>
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
`

export default Menu