import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import TextInput from './TextInput'
import { BsPersonCircle } from 'react-icons/bs'

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
                Icon={<BsPersonCircle className='icon'/>}
                placeholder='Entrez votre prénom'
                required 
            />
            <button type='submit'>Accéder à mon espace</button>
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

    button {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 2px solid #ff9f1b;
        border-radius: 5px;
        outline: none;
        transition: .3s ease;
        background: #ff9f1b;
        color: white;
        font-family: 'Open Sans', sans-serif;
    }

    button:hover {
        background: white;
        color: #ff9f1b;
        cursor: pointer;
    }
`


export default LoginForm