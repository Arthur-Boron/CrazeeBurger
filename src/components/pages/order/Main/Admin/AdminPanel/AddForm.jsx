import React, { useContext } from 'react'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext'
import { toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { MdAddShoppingCart } from "react-icons/md"
import getInputConfig from '../../../../../../config/addFormInputConfig'
import Form from '../../../../../reusable-ui/Form'
import Button from '../../../../../reusable-ui/Button'
import { styled } from 'styled-components'
import { EMPTY_PRODUCT } from '../../../../../../enums/product'

function AddForm() {

    const {handleAddProduct, newProduct, setNewProduct} = useContext(OrderContext)

    const displayToastNotification = (productName) => {
        toast.success(`Produit '${productName}' ajouté avec succès`, {
        icon: <MdAddShoppingCart size={30} color={theme.colors.success} />,
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

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }

        setNewProduct(EMPTY_PRODUCT)
        handleAddProduct(newProductToAdd)
        displayToastNotification(newProductToAdd.title)
    }

    const handleChange = (event) => {
        const newValue = event.target.value
        const propertyName = event.target.name
        setNewProduct({...newProduct, [propertyName]: newValue})
    }

    const inputs = getInputConfig(newProduct)

    return (
        <Form onSubmit={handleSubmit} onChange={handleChange} data={inputs} product={newProduct}>
            <HalfWidthButton
                Label="Ajouter un nouveau produit"
                version="success"
            />
        </Form>
    )
}

const HalfWidthButton = styled(Button)`
  width: 50%;
`;


export default AddForm