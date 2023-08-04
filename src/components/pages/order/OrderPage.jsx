import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { theme } from '../../../theme'

function OrderPage() {

  const {name} = useParams()

  return (
    <OrderPageStyled>
      <div className='container'>
        <h1>Bonjour {name}</h1>
        <br />
        <Link to={'/'}>
            <button>Déconnexion</button>
        </Link>
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
  }
`

export default OrderPage