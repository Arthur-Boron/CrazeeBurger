import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function EmptyMenuClient() {
  return (
    <EmptyMenuStyled>
        <span className="title">Victime de notre succès ! :D</span>
        <span className="description">De nouvelles recettes sont en cours de préparation</span>
        <span className="description">A très vite !</span>
    </EmptyMenuStyled>
)
}
const EmptyMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme. shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title,
  .description {
      text-align: center;
      font-family:${theme.fonts.family.stylish};
      color: ${theme.colors.greyBlue};
  }

  .title {
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme. fonts.weights.semiBold};
  }

  .description {
      font-size: ${theme.fonts.size.P4};
      margin-top: 20px;
  }

`


export default EmptyMenuClient