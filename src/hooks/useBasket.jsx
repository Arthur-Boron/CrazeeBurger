import { useState } from "react"
import { deepClone, filterId, findById, findIndexById } from "../utils/array"
import { syncBothBaskets } from "../api/product"

export const useBasket = () => {
    const [basket, setBasket] = useState(undefined)
    
    const handleAddToBasket = (productIdToAdd, userId) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findById(productIdToAdd, basket) !== undefined
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                id: productIdToAdd,
                quantity: 1
            }
            const basketUpdated = [newBasketProduct, ...basketCopy];
            setBasket(basketUpdated)
            syncBothBaskets(userId, basketUpdated)
        } else {
            const productToAddIndex = findIndexById(productIdToAdd, basket)
            basketCopy[productToAddIndex].quantity += 1;
            setBasket(basketCopy)
            syncBothBaskets(userId, basketCopy)
        }
    }

    const handleDeleteFromBasket = (productIdToDelete, newQuantity, userId) => {
        const basketCopy = deepClone(basket)
        if (newQuantity == 0) {
            const basketUpdated = filterId(productIdToDelete, basketCopy)
            setBasket(basketUpdated)
            syncBothBaskets(userId, basketUpdated)
        } else {
            const productToDecrementIndex = findIndexById(productIdToDelete, basket)
            basketCopy[productToDecrementIndex].quantity -= 1;
            setBasket(basketCopy)
            syncBothBaskets(userId, basketCopy)
        }
    }

    return {basket, setBasket, handleAddToBasket, handleDeleteFromBasket}
}