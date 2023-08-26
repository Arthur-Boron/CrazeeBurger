import { createContext } from "react";

export default createContext({
    isModeAdmin : false,
    setIsModeAdmin: () => {},
    
    menu: [],

    basket:[],

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},

    titleInputRef: {}
})