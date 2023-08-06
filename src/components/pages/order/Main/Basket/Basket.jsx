import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function Basket() {
  return (
    <BasketStyled>
        Basket
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
    background-color: red;
`

export default Basket