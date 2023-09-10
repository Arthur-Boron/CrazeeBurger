import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function LoadingBasket() {
  return (
    <LoadingBasketStyled>
        <span>Chargement en cours...</span>
    </LoadingBasketStyled>
  )
}

const LoadingBasketStyled = styled.div`
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    text-align: center;
`

export default LoadingBasket