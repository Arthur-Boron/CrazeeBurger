import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import { fakeMenu2 } from '../../../../../fakeData/fakeMenu'

function Menu() {

  const [menu, setFakeMenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {menu.map(product => {
        return (
        <div className="product" key={product.id}>
          <div className='image-container'>
            <img className='img' src={product.imageSource} alt={product.title}/>
          </div>
          <div className='info-text'>
            <div className='title'>{product.title}</div>
            <div className='description'>
              <div className="price">{product.price}</div>
              <button>Ajouter</button>
            </div>
          </div>
          
        </div>
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
    
    .product {
      background-color: darkviolet;
      width: 240px;
      height: 330px;
      box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
      border-radius: ${theme.borderRadius.extraRound};

      .image-container {
        width: 100px;
        height: auto;
        
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
`

export default Menu