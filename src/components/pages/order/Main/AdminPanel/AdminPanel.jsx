import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function AdminPanel() {
  return (
    <AdminPanelStyled>
        AdminPanel
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    background-color: darkblue;
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
`

export default AdminPanel