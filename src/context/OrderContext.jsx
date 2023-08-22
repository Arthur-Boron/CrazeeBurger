import { createContext } from "react";

export default createContext({
    isModeAdmin : false,
    setIsModeAdmin: () => {},
    
    menu: [],
    setMenu: () => {},

    handleAddProduct: () => {},
    handleEditProduct: () => {},
    handleDeleteProduct: () => {},
    regenerateMenu: () => {},

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},
})