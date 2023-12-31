import React from 'react'
import { css, styled } from 'styled-components'
import { theme } from '../../theme'

function SelectInput({id, value, options, onChange, Icon, className, version=light, ...extraProps}) {
  return (
    <SelectInputStyled className={className} version={version}>
        <div className='inputIcon'>{Icon && Icon}</div>
        <select id={id} name={value} value={value} onChange={onChange} {...extraProps}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.div`
    display: flex;
    font-size: ${theme.fonts.size.SM};
    line-height: 28px;
    align-items: center;
    position: relative;
    ${({version}) => extraStyle[version]};
    

    select {
        width: 100%;
        height: 46px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 3px solid transparent;
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.dark};
        transition: .3s ease;
        font-family: 'Open Sans', sans-serif;

        &:focus, &:hover {
            outline: none;
            cursor: pointer;
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

const extraLightStyle = css`
    select {
        background: ${theme.colors.white}
    }
`

const extraDarkStyle = css`
    select {
        background: ${theme.colors.greyLight}
    }
`

const extraStyle = {
    light : extraLightStyle,
    dark: extraDarkStyle
}

export default SelectInput