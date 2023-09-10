import { createContext } from "react";

export default createContext({
    isModeAdmin : false,
    setIsModeAdmin: () => {},

    user: () => {},
    
    menu: [],

    basket:[],

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},

    titleInputRef: {}
})