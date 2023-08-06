import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function AdminPanel() {
  return (
    <AdminPanelStyled>
        AdminTabs
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    background: ${theme.colors.white};
    height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`
export default AdminPanel