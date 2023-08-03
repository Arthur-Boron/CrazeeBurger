import React from 'react'
import { styled } from 'styled-components'

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
    margin: 18px 0;

    input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 3px solid transparent;
        border-radius: 5px;
        color: #0d0c22;
        transition: .3s ease;
        font-family: 'Open Sans', sans-serif;
    }

    input::placeholder {
        color: lightgrey;
        background: white;
    }

    input:focus, input:hover {
        outline: none;
        border-color: #ff9f1b;
    }

    .icon {
        position: absolute;
        left: 1rem;
        fill: #93a2b1;
        width: 1rem;
        height: 1rem;
    }
`

export default TextInput