import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Card from '../../../../reusable-ui/Card'
import {formatPrice} from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { MdRemoveShoppingCart } from "react-icons/md"
import EmptyMenuAdmin from './EmptyMenuAdmin'
import EmptyMenuClient from './EmptyMenuClient'
import { theme } from '../../../../../theme'
import AdminTabContext from '../../../../../context/AdminTabContext'

function Menu() {

  const {menu, isModeAdmin, handleDeleteProduct, regenerateMenu, productSelected, setProductSelected} = useContext(OrderContext)
  const {setIsCollapsed, setSelectedTab} = useContext(AdminTabContext)
  const IMG_BY_DEFAULT = '/images/coming-soon.png'

  const checkIfProductIsSelected = (productId, idProductClickedOn) => {
    return idProductClickedOn === productId
  }

  const displayToastNotification = (productName) => {
    toast.success(`Produit '${productName}' supprimé avec succès`, {
    icon: <MdRemoveShoppingCart size={30} color={theme.colors.success}/>,
    theme: "light",
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    })
  }

  const handleDelete = (productToDelete) => {
    handleDeleteProduct(productToDelete.id)
    displayToastNotification(productToDelete.title)
  }

  const handleClick = (cardId) => {
    if (isModeAdmin) {
      setIsCollapsed(false)
      setSelectedTab('edit')
      const productClickedOn = menu.find((product) => product.id == cardId)
      setProductSelected(productClickedOn)
    }
  }

  const handleCardAddedInBasket = (event) => {
    event.stopPropagation();
  }

  const handleCardDelete = (event, id, title) => {
    event.stopPropagation();
    handleDelete(id, title)
  }

  return menu.length === 0 ? (
    isModeAdmin ? 
      <EmptyMenuAdmin onReset={regenerateMenu} /> : 
      <EmptyMenuClient />
  ) : (
    <MenuStyled>
      {menu.map(({ id, title, imageSource = IMG_BY_DEFAULT, price }) => (
        <Card 
          key={id} 
          title={title} 
          imageSource={imageSource} 
          leftDescription={formatPrice(price)}
          hasDeleteButton={isModeAdmin}
          onAddProductInBasket={(event) => handleCardAddedInBasket(event)}
          onDelete={(event) => handleCardDelete(event, {id, title})}
          onClick={() => handleClick(id)}
          isHoverable={isModeAdmin}
          isSelected={checkIfProductIsSelected(id, productSelected.id)}
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    padding: 50px 50px 150px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    overflow-y: auto;
`

export default Menu