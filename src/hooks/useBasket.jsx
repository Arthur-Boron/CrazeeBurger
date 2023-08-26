import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, filterId, findById, findIndexById } from "../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    
    const handleAddToBasket = (productIdToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findById(productIdToAdd, basket) !== undefined
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                id: productIdToAdd,
                quantity: 1
            }
            const basketUpdated = [newBasketProduct, ...basketCopy];
            setBasket(basketUpdated)
        } else {
            const productToAddIndex = findIndexById(productIdToAdd, basket)
            basketCopy[productToAddIndex].quantity += 1;
            setBasket(basketCopy)
        }
    }

    const handleEditProduct = (productBeingEdited) => {
        
    }

    const handleDeleteFromBasket = (productIdToDelete, newQuantity) => {
        const basketCopy = deepClone(basket)
        if (newQuantity == 0) {
            const basketUpdated = filterId(productIdToDelete, basketCopy)
            setBasket(basketUpdated)
        } else {
            const productToDecrementIndex = findIndexById(productIdToDelete, basket)
            basketCopy[productToDecrementIndex].quantity -= 1;
            setBasket(basketCopy)
        }
    }

    const regenerateBasket = () => {
        setBasket(fakeBasket.LARGE)
    }

    return {basket, handleAddToBasket, handleEditProduct, handleDeleteFromBasket, regenerateBasket}
}