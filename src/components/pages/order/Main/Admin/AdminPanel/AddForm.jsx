import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext'
import { toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { MdAddShoppingCart, MdOutlineEuro } from "react-icons/md"
import { BsFillCameraFill } from 'react-icons/bs'
import { FaHamburger } from 'react-icons/fa'
import TextInput from '../../../../../reusable-ui/TextInput'
import Button from '../../../../../reusable-ui/Button'
import ImagePreview from './ImagePreview'


export const EMPTY_PRODUCT = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
}

function AddForm() {

    const {handleAddProduct, newProduct, setNewProduct} = useContext(OrderContext)

    const displayToastNotification = (productName) => {
        toast.info(`Produit '${productName}' ajouté avec succès`, {
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

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }

        handleAddProduct(newProductToAdd)
        displayToastNotification(newProductToAdd.title)
    }

    const handleChange = (event) => {
        const newValue = event.target.value
        const propertyName = event.target.name
        setNewProduct({...newProduct, [propertyName]: newValue})
    }

  return (
    <AddFormStyled action='submit' onSubmit={handleSubmit}>
        <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
        <div className='inputFields'>
            <TextInput
                name="title"
                value={newProduct.title}
                onChange={handleChange}
                Icon={<FaHamburger />}
                placeholder='Nom du produit'
                version="dark"
                required 
            />
            <TextInput
                name="imageSource"
                value={newProduct.imageSource}
                onChange={handleChange}
                Icon={<BsFillCameraFill />}
                placeholder="Lien URL d'une image"
                version="dark"
                required 
            />
            <TextInput
                name="price"
                value={newProduct.price ? newProduct.price : ''}
                onChange={handleChange}
                Icon={<MdOutlineEuro />}
                type="number"
                placeholder='Prix'
                version="dark"
                required 
            />
        </div>
        <Button
            className='submitButton'
            Label="Ajouter un nouveau produit"
            version="success"
        />
        
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    grid-row-gap: ${theme.spacing.xs};
    grid-column-gap: ${theme.spacing.md};
    
    .inputFields {
        grid-area: 1/2/4/2;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        margin-right: 20px;
    } 

    .submitButton {
        grid-area: 4/2/5/3;
        width: 50%;
    } 
`

export default AddForm