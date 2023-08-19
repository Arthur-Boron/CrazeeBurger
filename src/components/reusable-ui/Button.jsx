import React from 'react'
import { css, styled } from 'styled-components'
import { theme } from '../../theme'

function Button({Label, Icon, version=primary, className}) {
  return (
    <ButtonStyled type='submit' className={className} version={version}>
        <span>{Label && Label}</span>
        {Icon && Icon}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  width: 100%;
  height: ${theme.gridUnit * 5}px;
  line-height: 28px;
  border-radius: ${theme.borderRadius.round};
  outline: none;
  transition: .3s ease;
  color: ${theme.colors.white};
  font-family: 'Open Sans', sans-serif;

  ${({version}) => extraStyle[version]};

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: ${theme.colors.white};
  }
`

const extraPrimaryStyle = css`
  border: 2px solid ${theme.colors.primary};
  background: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
  }

  &:active {
    background: ${theme.colors.primary};
  }
`

const extraSuccessStyle = css`
  border: 2px solid ${theme.colors.success};
  background: ${theme.colors.success};

  &:hover {
    color: ${theme.colors.success};
    background: ${theme.colors.white};
  }

  &:active {
    background: ${theme.colors.success};
  }
`

const extraStyle = {
    primary : extraPrimaryStyle,
    success: extraSuccessStyle
}

export default Button