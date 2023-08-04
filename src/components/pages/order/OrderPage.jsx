import React from 'react'
import { useParams } from 'react-router'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import Main from './Main'
import { theme } from '../../../theme'


function OrderPage() {

  const {name} = useParams()

  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar name={name}/>
        <Main />
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
  }
`

export default OrderPage