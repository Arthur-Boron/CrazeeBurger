import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'
import OrderContext from '../../../../../../context/OrderContext'

function AddForm() {

    const {handleAddProduct} = useContext(OrderContext)

    const newProduct = {
        id: 11,
        imageSource: "/images/ice-cream.png",
        title: "Glaces artisanales",
        price: 4.678,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddProduct(newProduct)
    }

  return (
    <AddFormStyled action='submit' onSubmit={handleSubmit}>
        <div className='previewImage'>Imagepreview</div>
        <div className='inputFields'>
            <input type="text" placeholder='nom'/>
            <input type="text" placeholder='url'/>
            <input type="text" placeholder='price'/>
        </div>
        <button type="submit" className='submitButton'>
            Submit
        </button>
        
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);

    .previewImage {
        grid-area: 1/1/4/2;
        background-color: green;
    }
    
    .inputFields {
        grid-area: 1/2/4/2;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        background-color: red;
    } 

    .submitButton {
        grid-area: 4/2/5/3;
        width: 50%;
        background-color: cyan;
    } 



    .inputIcon {
        position: absolute;
        left: 1rem;
        fill: ${theme.colors.greyMedium};
        width: 1rem;
        height: 1rem;
    }
`

export default AddForm