import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function TextInput({value, onChange, Icon, className, ...extraProps}) {
  return (
    <TextInputStyled className={className}>
        <div className='inputIcon'>{Icon && Icon}</div>
        <input value={value} type='text' onChange={onChange} {...extraProps}/>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    display: flex;
    font-size: ${theme.fonts.size.SM};
    line-height: 28px;
    align-items: center;
    position: relative;

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

        &::placeholder {
            color: ${theme.colors.greyMedium};
            background: ${theme.colors.white};
        }

        &:focus, &:hover {
            outline: none;
            border-color: ${theme.colors.primary};
        }
    }

    .inputIcon {
        height: 100%;

        svg {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            fill: ${theme.colors.greyMedium};
            width: 1rem;
            height: 1rem;
        }
        
    }
`

export default TextInput