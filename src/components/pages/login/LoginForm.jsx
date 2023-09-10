import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import TextInput from '../../reusable-ui/TextInput'
import { BsPersonCircle } from 'react-icons/bs'
import { BiSolidChevronRight } from 'react-icons/bi'
import Button from '../../reusable-ui/Button'
import { theme } from '../../../theme'
import { authenticateUser } from '../../../api/user'
import AuthContext from '../../../context/AuthContext'

function LoginForm() {

    const [inputValue, setInputValue] = useState('')
    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const authenticate = async() => {
        const userId = await authenticateUser(inputValue)
        const user = {
            id: userId,
            name: inputValue
        }
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await authenticate()
        setInputValue("")
        navigate('order')
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
                id="login"
                className="input-login"
                value={inputValue}
                onChange={handleChange}
                Icon={<BsPersonCircle />}
                placeholder='Entrez votre prénom'
                version="light"
                required 
            />
            <Button
                Label="Accéder à mon espace"
                Icon={<BiSolidChevronRight className='buttonIcon'/>}
                version="primary"
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
    font-family: ${theme.fonts.family.stylish};

    hr {
        border: 1.5px solid ${theme.colors.primary_line};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P4};
    }

    .input-login {
        margin: ${theme.gridUnit * 2}px 0;
    }

    .buttonIcon {
        vertical-align: middle;
        font-size: ${theme.fonts.size.SM};
        margin-left: ${theme.gridUnit /2}px;
    }
`


export default LoginForm