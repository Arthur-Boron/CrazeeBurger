import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filterId, findIndexById } from "../utils/array";

export const useMenu = () => {
    const [menu, setMenu] = useState(fakeMenu.LARGE)
  
    const handleAddProduct = (newProduct) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = [newProduct, ...menuCopy];
        setMenu(menuUpdated)
    }

    const handleEditProduct = (productBeingEdited) => {
        const menuCopy = deepClone(menu)
        const productToEditIndex = findIndexById(productBeingEdited.id, menu)
        menuCopy[productToEditIndex] = productBeingEdited;
        setMenu(menuCopy)
    }

    const handleDeleteProduct = (productIdToDelete) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = filterId(productIdToDelete, menuCopy)
        setMenu(menuUpdated)
    }

    const regenerateMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    return {menu, handleAddProduct, handleEditProduct, handleDeleteProduct, regenerateMenu}
 }