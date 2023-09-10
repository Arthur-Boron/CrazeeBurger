import { getMenuAndBasket } from "../../../../api/product"

export const initializeSession = (userId, setMenu, setBasket) => {
    const initializeMenuAndBasket = async (userId, setMenu, setBasket) => {
        const menuAndBasketReceived = await getMenuAndBasket(userId)
        setMenu(menuAndBasketReceived.menu)
        setBasket(menuAndBasketReceived.basket)
    }

    initializeMenuAndBasket(userId, setMenu, setBasket)
}