import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import TextContainer from '../../../../reusable-ui/TextContainer'

function Total({amountToPay}) {
  return (
    <TextContainer>
        <TotalStyled>
            <span>TOTAL</span>
            <span>{amountToPay}</span>
        </TotalStyled>
    </TextContainer>
  )
}

const TotalStyled = styled.div`
    color: ${theme.colors.primary};
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 2px;
`

export default Total