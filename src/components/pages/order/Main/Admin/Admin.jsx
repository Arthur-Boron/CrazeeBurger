import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel'
import AdminTabsContext from '../../../../../context/AdminTabContext'

function Admin() {

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedTab, setSelectedTab] = useState('add')

  const adminTabsContextValue = {
    selectedTab,
    setSelectedTab,
    isCollapsed,
    setIsCollapsed
  }

  return (
    <AdminTabsContext.Provider value={adminTabsContextValue}>
      <AdminStyled>
          <AdminTabs />
          {!isCollapsed && <AdminPanel />}
      </AdminStyled>
    </AdminTabsContext.Provider>
    
  )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

export default Admin