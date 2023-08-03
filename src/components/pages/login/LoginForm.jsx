import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import TextInput from '../../reusable-ui/TextInput'
import { BsPersonCircle } from 'react-icons/bs'
import { BiSolidChevronRight } from 'react-icons/bi'
import PrimaryButton from '../../reusable-ui/PrimaryButton'

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
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: 'Amatic SC', cursive;

    hr {
        border: 1.5px solid #f56a2c;
        margin-bottom: 40px;
    }

    h1 {
        color: white;
        font-size: 48px;
    }

    h2 {
        margin: 20px 10px 10px;
        color: white;
        font-size: 36px;
    }

    .inputIcon {
        position: absolute;
        left: 1rem;
        fill: #93a2b1;
        width: 1rem;
        height: 1rem;
    }

    .buttonIcon {
        vertical-align: middle;
        font-size: 15px;
        margin-left: 4px;
    }
`


export default LoginForm