import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
        <form action='submit' onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} type='text' placeholder='Entrez votre prénom...' required onChange={handleChange}/>
            <button type='submit'>Accéder à votre espace</button>
        </form>
    )
}

export default LoginForm