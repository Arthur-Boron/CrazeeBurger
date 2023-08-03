import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import TextInput from '../../reusable-ui/TextInput'
import { BsPersonCircle } from 'react-icons/bs'
import { BiSolidChevronRight } from 'react-icons/bi'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import { theme } from '../../../theme'

function LoginForm() {

    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue("")
        navigate('order/' + inputValue)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <LoginFormStyled action='submit' onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput 
                value={inputValue}
                onChange={handleChange}
                Icon={<BsPersonCircle className='inputIcon'/>}
                placeholder='Entrez votre prénom'
                required 
            />
            <PrimaryButton
                Label="Accéder à mon espace"
                Icon={<BiSolidChevronRight className='buttonIcon'/>}
            />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: 'Amatic SC', cursive;

    hr {
        border: 1.5px solid ${theme.colors.primary_line};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P4};
    }

    .inputIcon {
        position: absolute;
        left: 1rem;
        fill: ${theme.colors.greyMedium};
        width: 1rem;
        height: 1rem;
    }

    .buttonIcon {
        vertical-align: middle;
        font-size: ${theme.fonts.P0};
        margin-left: ${theme.gridUnit /2}px;
    }
`


export default LoginForm