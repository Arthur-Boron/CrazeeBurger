import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import Logo from '../../reusable-ui/Logo'
import { styled } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';

function LoginPage() {

  const [showSplash, setShowSplash] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);

      const formTimer = setTimeout(() => {
        setShowLoginForm(true);
      }, 500);

      return () => clearTimeout(formTimer);
    }, 500);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <LoginPageStyled>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo className="logo-login-page" />
          </motion.div>
        )}

        {showLoginForm && (
          <motion.div 
            key="form"
            initial={{ y: "100vh" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Logo className="logo-login-page" />
            <LoginForm />
          </motion.div>
        )}
      </AnimatePresence>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
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

  .logo-login-page {
    transform: scale(2.5);
    justify-content: center;
  }
`

export default LoginPage