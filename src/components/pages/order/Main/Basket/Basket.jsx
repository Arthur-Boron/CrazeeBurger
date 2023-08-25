import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import TextContainer from '../../../../reusable-ui/TextContainer'

function Basket() {
  return (
    <BasketStyled>
        <TextContainer>head</TextContainer>
        <div className='body'>body</div>
        <TextContainer>footer</TextContainer>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
  

    .body {
      flex: 1;
      box-shadow: ${theme.shadows.basket};
    }
`

export default Basket