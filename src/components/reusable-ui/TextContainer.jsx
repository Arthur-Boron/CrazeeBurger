import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function TextContainer({children}) {
  return (
    <TextContainerStyled>{children}</TextContainerStyled>
  )
}

const TextContainerStyled = styled.div`
    background-color: ${theme.colors.background_dark};
    height: 70px;
`

export default TextContainer