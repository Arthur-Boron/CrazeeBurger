import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../navbar/Navbar'
import Main from './Main/Main'
import { theme } from '../../../theme'
import OrderContext from '../../../context/OrderContext'
import AdminTabContext from '../../../context/AdminTabContext'
import { fakeMenu } from '../../../fakeData/fakeMenu'


function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [menu, setFakeMenu] = useState(fakeMenu.LARGE)

  const handleAddProduct = (newProduct) => {
    const menuCopy = [...menu]
    const menuUpdated = [newProduct, ...menuCopy];
    setFakeMenu(menuUpdated)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menu,
    setFakeMenu,
    handleAddProduct
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