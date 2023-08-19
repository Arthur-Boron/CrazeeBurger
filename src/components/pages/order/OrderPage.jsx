import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../navbar/Navbar'
import Main from './Main/Main'
import { theme } from '../../../theme'
import OrderContext from '../../../context/OrderContext'
import AdminTabContext from '../../../context/AdminTabContext'
import { fakeMenu } from '../../../fakeData/fakeMenu'
import { EMPTY_PRODUCT } from './Main/Admin/AdminPanel/AddForm'


function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [menu, setFakeMenu] = useState(fakeMenu.LARGE)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleAddProduct = (newProduct) => {
    const menuCopy = [...menu]
    const menuUpdated = [newProduct, ...menuCopy];
    setFakeMenu(menuUpdated)
    setNewProduct(EMPTY_PRODUCT)
  }

  const handleDeleteProduct = (productIdToDelete) => {
    const menuCopy = [...menu]
    const menuUpdated = menuCopy.filter((product) => product.id !== productIdToDelete)
    setFakeMenu(menuUpdated)
  }

  const regenerateMenu = () => {
    setFakeMenu(fakeMenu.LARGE)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menu,
    setFakeMenu,
    handleAddProduct,
    handleDeleteProduct,
    regenerateMenu,

    newProduct,
    setNewProduct
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