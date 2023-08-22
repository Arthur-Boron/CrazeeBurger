import React from 'react'
import { styled } from 'styled-components'
import { HiCursorClick } from 'react-icons/hi'
import { theme } from '../../../../../../theme'

function HintMessage() {
  return (
    <HintMessageStyled>
        <span>Cliquer sur un produit du menu pour le modifier</span>
        <HiCursorClick />
    </HintMessageStyled>
  )
}

const HintMessageStyled = styled.div`
    display: flex;
    align-items: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
    position: relative;
    top: 50px;
    margin-left: 15%;

    span {
        margin-right: ${theme.spacing.sm};
    }
`

export default HintMessage