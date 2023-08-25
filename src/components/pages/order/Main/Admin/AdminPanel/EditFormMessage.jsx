import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'

function EditFormMessage() {
  return (
    <EditFormMessageStyled>
        <div className='sentence'>Cliquer sur un produit pour le modifier <span className='live-update'>en temps réél</span></div>
    </EditFormMessageStyled>
  )
}

const EditFormMessageStyled = styled.span`
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};

    .sentence {
        .live-update {
            text-decoration: underline;
        }
    }
`

export default EditFormMessage