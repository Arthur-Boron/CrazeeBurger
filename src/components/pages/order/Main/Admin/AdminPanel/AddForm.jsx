import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext'
import { toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { MdAddShoppingCart } from "react-icons/md"

const EMPTY_PRODUCT = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
}

function AddForm() {

    const {handleAddProduct} = useContext(OrderContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

    const displayToastNotification = () => {
        toast.info("Produit ajouté avec succès", {
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
        displayToastNotification()
    }

    const handleChange = (event) => {
        const newValue = event.target.value
        const propertyName = event.target.name
        setNewProduct({...newProduct, [propertyName]: newValue})
    }

  return (
    <AddFormStyled action='submit' onSubmit={handleSubmit}>
        <div className='previewImage'>
            {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : "Aucune image"}
        </div>
        <div className='inputFields'>
            <input name="title" value={newProduct.title} onChange={handleChange} type="text" placeholder='Nom du produit' required/>
            <input name="imageSource" value={newProduct.imageSource} onChange={handleChange} type="text" placeholder="Lien URL d'une image"/>
            <input name="price" value={newProduct.price ? newProduct.price : ''} onChange={handleChange} type="number" placeholder='Prix'/>
        </div>
        <button type="submit" className='submitButton'>
            Submit
        </button>
        
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;

    .previewImage {
        grid-area: 1/1/4/2;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
        
    }
    
    .inputFields {
        grid-area: 1/2/4/2;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        background-color: red;
    } 

    .submitButton {
        grid-area: 4/2/5/3;
        width: 50%;
        background-color: cyan;
    } 



    .inputIcon {
        position: absolute;
        left: 1rem;
        fill: ${theme.colors.greyMedium};
        width: 1rem;
        height: 1rem;
    }
`

export default AddForm