import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Card from '../../../../reusable-ui/Card'
import {formatPrice} from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { MdAddShoppingCart } from "react-icons/md"
import EmptyMenuAdmin from './EmptyMenuAdmin'
import EmptyMenuClient from './EmptyMenuClient'

function Menu() {

  const {menu, isModeAdmin, handleDeleteProduct, regenerateMenu} = useContext(OrderContext)
  const IMG_BY_DEFAULT = '/images/coming-soon.png'

  const displayToastNotification = (productName) => {
    toast.info(`Produit '${productName}' supprimé avec succès`, {
    icon: <MdAddShoppingCart size={30} />,
    theme: "light",
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
  }

  const handleDelete = (productToDelete) => {
    handleDeleteProduct(productToDelete.id)
    displayToastNotification(productToDelete.title)
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
          onDelete={() => handleDelete({ id, title, imageSource, price })}
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