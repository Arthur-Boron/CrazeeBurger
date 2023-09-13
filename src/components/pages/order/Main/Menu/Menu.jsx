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
import { EMPTY_PRODUCT, IMG_BY_DEFAULT, IMG_PRODUCT_NOT_AVAILABLE } from '../../../../../enums/product'
import AuthContext from '../../../../../context/AuthContext'
import LoadingMenu from './LoadingMenu'
import {AnimatePresence, motion} from 'framer-motion'
import { convertStringToBoolean } from '../../../../../utils/string'

function Menu() {

  const {menu, isModeAdmin, handleAddToBasket, handleDeleteProduct, handleDeleteFromBasket, regenerateMenu, productSelected, setProductSelected, handleProductSelected} = useContext(OrderContext)
  const {user} = useContext(AuthContext)

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
    handleDeleteProduct(productIdToDelete, user.id)
    handleDeleteFromBasket(productIdToDelete, 0, user.id)
    displayToastNotification(productTitle)
  }

  const handleCardAddedInBasket = (event, {id}) => {
    event.stopPropagation();
    handleAddToBasket(id, user.id)
  }

  const handleCardDelete = (event, {id, title}) => {
    event.stopPropagation();
    handleDelete(id, title)
    if (productSelected.id == id) {
      setProductSelected(EMPTY_PRODUCT)
    }
  }

  if (menu === undefined) {
    return <LoadingMenu />;
  }

  // Si le menu est vide
  if (menu.length === 0) {
    return isModeAdmin ? (
      <EmptyMenuAdmin onReset={() => regenerateMenu(user.id)} />
    ) : (
      <EmptyMenuClient />
    );
  }

  return (
    <MenuStyled>
      <AnimatePresence>
      {menu.map(({ id, title, imageSource, price, isAvailable }) => {
        const finalImageSource = imageSource && imageSource !== "" ? imageSource : IMG_BY_DEFAULT;

        return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
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
                isOverlapImage={!convertStringToBoolean(isAvailable)} 
                overlapImageSource={IMG_PRODUCT_NOT_AVAILABLE} 
              />
            </motion.div>
        );
      })}
      </AnimatePresence>
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