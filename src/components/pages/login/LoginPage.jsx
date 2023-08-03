import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../../reusable-ui/logo/Logo'
import { styled } from 'styled-components'

function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    background-image: url("/images/burger-background.jpg");
    background-size: cover;
    background-position: center;
    filter: brightness(0.4);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

export default LoginPage