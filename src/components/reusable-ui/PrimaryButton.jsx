import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function PrimaryButton({Label, Icon}) {
  return (
    <PrimaryButtonStyled type='submit'>
        <span>{Label && Label}</span>
        {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  height: ${theme.gridUnit * 5}px;
  line-height: 28px;
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  outline: none;
  transition: .3s ease;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: 'Open Sans', sans-serif;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`

export default PrimaryButton