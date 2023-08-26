import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
    const [menu, setMenu] = useState(fakeMenu.LARGE)
  
    const handleAddProduct = (newProduct) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = [newProduct, ...menuCopy];
        setMenu(menuUpdated)
    }

    const handleEditProduct = (productBeingEdited) => {
        const menuCopy = deepClone(menu)
        const productToEditIndex = menu.findIndex((product) => product.id === productBeingEdited.id)
        menuCopy[productToEditIndex] = productBeingEdited;
        setMenu(menuCopy)
    }

    const handleDeleteProduct = (productIdToDelete) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = menuCopy.filter((product) => product.id !== productIdToDelete)
        setMenu(menuUpdated)
    }

    const regenerateMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    return {menu, handleAddProduct, handleEditProduct, handleDeleteProduct, regenerateMenu}
 }