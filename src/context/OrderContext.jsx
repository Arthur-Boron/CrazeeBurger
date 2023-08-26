import { createContext } from "react";

export default createContext({
    isModeAdmin : false,
    setIsModeAdmin: () => {},
    
    menu: [],
    handleAddProduct: () => {},
    handleEditProduct: () => {},
    handleDeleteProduct: () => {},
    regenerateMenu: () => {},

    basket:[],

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},

    titleInputRef: {}
})