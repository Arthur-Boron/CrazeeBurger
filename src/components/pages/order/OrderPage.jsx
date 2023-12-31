import { useContext, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../navbar/Navbar'
import Main from './Main/Main'
import { theme } from '../../../theme'
import OrderContext from '../../../context/OrderContext'
import AdminTabContext from '../../../context/AdminTabContext'
import { EMPTY_PRODUCT } from '../../../enums/product'
import { useMenu } from '../../../hooks/useMenu'
import { useBasket } from '../../../hooks/useBasket'
import { findById } from '../../../utils/array'
import AuthContext from '../../../context/AuthContext'
import { initializeSession } from './helpers/initializeSession'
import { useNavigate } from 'react-router-dom'


function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleInputRef = useRef()
  const {menu, setMenu, handleAddProduct, handleEditProduct, handleDeleteProduct, regenerateMenu} = useMenu()
  const {basket, setBasket, handleAddToBasket, handleDeleteFromBasket} = useBasket()
  const {user} = useContext(AuthContext)

  const handleProductSelected = async (cardId) => {
    if (isModeAdmin) {
      await setIsCollapsed(false)
      await setSelectedTab('edit')
      const productClickedOn = findById(cardId, menu)
      await setProductSelected(productClickedOn)
      titleInputRef.current.focus()
    }
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      initializeSession(user.id, setMenu, setBasket)
    } else {
      navigate('/')
    }
  }, [])
  

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menu,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    regenerateMenu,

    basket,
    handleAddToBasket,
    handleDeleteFromBasket,

    newProduct,
    setNewProduct,
    handleProductSelected,

    productSelected,
    setProductSelected,

    titleInputRef
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
        {user && <OrderPageStyled>
          <div className='container'>
            <Navbar/>
            <Main />
          </div>
        </OrderPageStyled>}
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