import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    
    const handleAddToBasket = (productToAdd) => {
        console.log(productToAdd.title)
    }

    const handleEditProduct = (productBeingEdited) => {
        
    }

    const handleDeleteProduct = (productIdToDelete, quantity) => {
        
    }

    const regenerateBasket = () => {
        setBasket(fakeBasket.LARGE)
    }

    return {basket, handleAddToBasket, handleEditProduct, handleDeleteProduct, regenerateBasket}
}