import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import { fakeMenu2 } from '../../../../../fakeData/fakeMenu'

function Menu() {

  const [menu, setFakeMenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {menu.map(product => {
        return <div className="product" key={product.id}>{product.title}</div>
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background-color: green;
    padding: 50px 50px 150px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    
    .product {
      background-color: darkviolet;
      width: 240px;
      height: 330px;
    }
`

export default Menu