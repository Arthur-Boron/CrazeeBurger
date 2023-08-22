import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../navbar/Navbar'
import Main from './Main/Main'
import { theme } from '../../../theme'
import OrderContext from '../../../context/OrderContext'
import AdminTabContext from '../../../context/AdminTabContext'
import { fakeMenu } from '../../../fakeData/fakeMenu'
import { EMPTY_PRODUCT } from '../../../enums/product'
import {deepClone} from '../../../utils/deepClone'


function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [menu, setMenu] = useState(fakeMenu.LARGE)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)

  const handleAddProduct = (newProduct) => {
    const menuCopy = deepClone(menu)
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated)
    setNewProduct(EMPTY_PRODUCT)
  }

  const handleEditProduct = (productBeingEdited) => {
    const menuCopy = deepClone(menu)
    const productToEditIndex = menu.findIndex((product) => product.id === productBeingEdited.id)
    menuCopy[productToEditIndex] = productBeingEdited;
    setProductSelected(productBeingEdited)
    setMenu(menuCopy)
  }

  const handleDeleteProduct = (productIdToDelete) => {
    const menuCopy = deepClone(menu)
    const menuUpdated = menuCopy.filter((product) => product.id !== productIdToDelete)
    setMenu(menuUpdated)
  }

  const regenerateMenu = () => {
    setMenu(fakeMenu.LARGE)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menu,
    setMenu,

    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    regenerateMenu,

    newProduct,
    setNewProduct,

    productSelected,
    setProductSelected
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