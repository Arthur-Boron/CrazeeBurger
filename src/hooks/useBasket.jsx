import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findById } from "../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    
    const handleAddToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findById(productToAdd.id, basket) !== undefined
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1
            }
            const basketUpdated = [newBasketProduct, ...basketCopy];
            setBasket(basketUpdated)
        } else {
            const productToAddIndex = basket.findIndex((product) => product.id === productToAdd.id)
            basketCopy[productToAddIndex].quantity += 1;
            setBasket(basketCopy)
        }
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