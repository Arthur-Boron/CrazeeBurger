import { createContext } from "react";

export default createContext({
    isModeAdmin : false,
    setIsModeAdmin: () => {},
    
    menu: [],
    setFakeMenu: () => {},
    handleAddProduct: () => {},
    handleDeleteProduct: () => {},
    regenerateMenu: () => {},

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},
})