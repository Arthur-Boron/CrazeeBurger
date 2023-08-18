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
        <div className='previewImage'>
            {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div className='empty-image'>Aucune Image</div>}
        </div>
        <div className='inputFields'>
            <TextInput
                name="title"
                value={newProduct.title}
                onChange={handleChange}
                Icon={<FaHamburger />}
                placeholder='Nom du produit'
                required 
            />
            <TextInput
                name="imageSource"
                value={newProduct.imageSource}
                onChange={handleChange}
                Icon={<BsFillCameraFill />}
                placeholder="Lien URL d'une image"
                required 
            />
            <TextInput
                name="price"
                value={newProduct.price ? newProduct.price : ''}
                onChange={handleChange}
                Icon={<MdOutlineEuro />}
                type="number"
                placeholder='Prix'
                required 
            />
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
    grid-row-gap: ${theme.spacing.xs};
    grid-column-gap: ${theme.spacing.md};

    .previewImage {
        grid-area: 1/1/4/2;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        .empty-image {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${theme.colors.greyLight};
            line-height: 1.5;
            color: ${theme.colors.greySemiDark};
            border-radius: ${theme.borderRadius.round};
        }
        
    }
    
    .inputFields {
        grid-area: 1/2/4/2;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
    } 

    .submitButton {
        grid-area: 4/2/5/3;
        width: 50%;
        background-color: cyan;
    } 
`

export default AddForm