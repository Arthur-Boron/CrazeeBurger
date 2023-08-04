import React from 'react'
import { styled } from 'styled-components'

function Main() {
  return (
    <MainStyled>
        Main
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: green;
    flex-grow: 1;
`

export default Main