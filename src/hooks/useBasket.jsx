import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.LARGE)
    
    const handleAddProduct = (newProduct) => {
        
    }

    const handleEditProduct = (productBeingEdited) => {
        
    }

    const handleDeleteProduct = (productIdToDelete, quantity) => {
        
    }

    const regenerateBasket = () => {
        setBasket(fakeBasket.LARGE)
    }

    return {basket, handleAddProduct, handleEditProduct, handleDeleteProduct, regenerateBasket}
}