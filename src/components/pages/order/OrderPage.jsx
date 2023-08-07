import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../navbar/Navbar'
import Main from './Main/Main'
import { theme } from '../../../theme'
import OrderContext from '../../../context/OrderContext'
import AdminTabContext from '../../../context/AdminTabContext'


function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedTab, setSelectedTab] = useState('add')

  const adminTabsContextValue = {
    selectedTab,
    setSelectedTab,
    isCollapsed,
    setIsCollapsed
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <AdminTabContext.Provider value={adminTabsContextValue}>
        <OrderPageStyled>
          <div className='container'>
            <Navbar/>
            <Main />
          </div>
        </OrderPageStyled>
      </AdminTabContext.Provider>
    </OrderContext.Provider>
    
  )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
  }
`

export default OrderPage