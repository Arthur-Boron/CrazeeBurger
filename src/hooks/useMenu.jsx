import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filterId, findIndexById } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
    const [menu, setMenu] = useState(undefined)
  
    const handleAddProduct = (newProduct, userId) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = [newProduct, ...menuCopy];
        setMenu(menuUpdated)
        syncBothMenus(userId, menuUpdated)
    }

    const handleEditProduct = (productBeingEdited) => {
        const menuCopy = deepClone(menu)
        const productToEditIndex = findIndexById(productBeingEdited.id, menu)
        menuCopy[productToEditIndex] = productBeingEdited;
        setMenu(menuCopy)
    }

    const handleDeleteProduct = (productIdToDelete, userId) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = filterId(productIdToDelete, menuCopy)
        setMenu(menuUpdated)
        syncBothMenus(userId, menuUpdated)
    }

    const regenerateMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    return {menu, setMenu, handleAddProduct, handleEditProduct, handleDeleteProduct, regenerateMenu}
 }