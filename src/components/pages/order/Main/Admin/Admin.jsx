import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel'
import AdminTabContext from '../../../../../context/AdminTabContext'

function Admin() {

  const {isCollapsed} = useContext(AdminTabContext)

  return (
    <AdminStyled>
        <AdminTabs />
        {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

export default Admin