import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function TextInput({value, onChange, Icon, ...extraProps}) {
  return (
    <TextInputStyled>
        {Icon && Icon}
        <input value={value} type='text' onChange={onChange} {...extraProps}/>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    margin: ${theme.gridUnit * 2}px 0;

    input {
        width: 100%;
        height: ${theme.gridUnit * 5}px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 3px solid transparent;
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.dark};
        transition: .3s ease;
        font-family: 'Open Sans', sans-serif;
    }

    input::placeholder {
        color: ${theme.colors.greyMedium};
        background: ${theme.colors.white};
    }

    input:focus, input:hover {
        outline: none;
        border-color: ${theme.colors.primary};
    }
`

export default TextInput