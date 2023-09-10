import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function LoadingMenu() {
  return (
    <LoadingMenuStyled>
        <span>Chargement en cours...</span>
    </LoadingMenuStyled>
)
}
const LoadingMenuStyled = styled.div`
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme. shadows.strong};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family:${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme. fonts.weights.semiBold};

`


export default LoadingMenu