import React from 'react'
import { styled } from 'styled-components'

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
  height: 40px;
  line-height: 28px;
  border: 2px solid #ff9f1b;
  border-radius: 5px;
  outline: none;
  transition: .3s ease;
  background: #ff9f1b;
  color: white;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    background: white;
    color: #ff9f1b;
    cursor: pointer;
  }
`

export default PrimaryButton