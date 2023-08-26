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
import { EMPTY_PRODUCT, IMG_BY_DEFAULT } from '../../../../../enums/product'

function Menu() {

  const {menu, isModeAdmin, handleAddToBasket, handleDeleteProduct, handleDeleteFromBasket, regenerateMenu, productSelected, setProductSelected, handleProductSelected} = useContext(OrderContext)

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

  const handleDelete = (productIdToDelete, productTitle) => {
    handleDeleteProduct(productIdToDelete)
    handleDeleteFromBasket(productIdToDelete, 0)
    displayToastNotification(productTitle)
  }

  const handleCardAddedInBasket = (event, {id}) => {
    event.stopPropagation();
    handleAddToBasket(id)
  }

  const handleCardDelete = (event, {id, title}) => {
    event.stopPropagation();
    handleDelete(id, title)
    if (productSelected.id == id) {
      setProductSelected(EMPTY_PRODUCT)
    }
  }

  return menu.length === 0 ? (
    isModeAdmin ? 
      <EmptyMenuAdmin onReset={regenerateMenu} /> : 
      <EmptyMenuClient />
  ) : (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        const finalImageSource = imageSource && imageSource !== "" ? imageSource : IMG_BY_DEFAULT;

        return (
            <Card 
              key={id} 
              title={title} 
              imageSource={finalImageSource} 
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onAddProductInBasket={(event) => handleCardAddedInBasket(event, {id})}
              onDelete={(event) => handleCardDelete(event, {id, title})}
              onClick={() => handleProductSelected(id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsSelected(id, productSelected.id)}
            />
        );
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    padding: 50px 50px 150px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: auto;
`

export default Menu