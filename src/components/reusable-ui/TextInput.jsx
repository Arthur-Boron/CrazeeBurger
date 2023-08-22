import React from 'react'
import { css, styled } from 'styled-components'
import { theme } from '../../theme'

const TextInput = React.forwardRef(({value, onChange, Icon, className, version=light, ...extraProps}, ref) => {
  return (
    <TextInputStyled className={className} version={version}>
        <div className='inputIcon'>{Icon && Icon}</div>
        <input ref={ref} value={value} type='text' onChange={onChange} {...extraProps}/>
    </TextInputStyled>
  )
})

const TextInputStyled = styled.div`
    display: flex;
    font-size: ${theme.fonts.size.SM};
    line-height: 28px;
    align-items: center;
    position: relative;
    ${({version}) => extraStyle[version]};
    

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

const extraLightStyle = css`
    input {
        background: ${theme.colors.white}
    }

    input:-webkit-autofill,
    input:-internal-autofill-selected {
        background-color: ${theme.colors.white} !important;
        color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.white} inset !important;
        border: 3px solid ${theme.colors.white} !important;
    }

    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        background-color: ${theme.colors.white} !important;
        color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.white} inset !important;
        border: 3px solid ${theme.colors.primary} !important;
    }
`

const extraDarkStyle = css`
    input {
        background: ${theme.colors.greyLight}
    }

    input:-webkit-autofill,
    input:-internal-autofill-selected {
        background-color: ${theme.colors.greyLight} !important;
        color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.greyLight} inset !important;
        border: 3px solid ${theme.colors.greyLight} !important;
    }

    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        background-color: ${theme.colors.greyLight} !important;
        color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.greyLight} inset !important;
        border: 3px solid ${theme.colors.primary} !important;
    }
`

const extraStyle = {
    light : extraLightStyle,
    dark: extraDarkStyle
}

export default TextInput