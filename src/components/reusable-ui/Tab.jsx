import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function Tab({Icon, onClick, className, Label}) {
  return (
    <TabStyled className={className} onClick={onClick}>
        <div className='icon'>{Icon && Icon}</div>
        {Label && <span className='label'>{Label}</span>}
    </TabStyled>
  )
}

const TabStyled = styled.button`
  height: 45px;
  padding: 0px 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`

export default Tab