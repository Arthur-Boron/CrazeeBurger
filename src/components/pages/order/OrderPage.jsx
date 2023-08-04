import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { theme } from '../../../theme'

function OrderPage() {

  const {name} = useParams()

  return (
    <OrderPageStyled>
      <div className='container'>
        <div className='navbar'>
          <h1>Bonjour {name}</h1>
          <br />
          <Link to={'/'}>
              <button>Déconnexion</button>
          </Link> 
        </div>
        <div className='main'>
          Main
        </div>
        
      </div>
    </OrderPageStyled>
    
  )
}

const OrderPageStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 98vh;
    width: 98vw;
    display: flex;
    flex-direction: column;

    .navbar {
      background-color: blue;
      height: 80px;
    }

    .main {
      background-color: green;
      flex-grow: 1;
    }
  }
`

export default OrderPage