import React from 'react'
import { styled } from 'styled-components'
import TextContainer from '../../../../reusable-ui/TextContainer'
import { theme } from '../../../../../theme'

function Footer({className}) {
  return (
    <TextContainer className={className}>
        <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>
    </TextContainer>
  )
}

const FooterStyled = styled.span`
    color: ${theme.colors.greyLight};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P2};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    letter-spacing: 2px;
    text-align: center;
`

export default Footer