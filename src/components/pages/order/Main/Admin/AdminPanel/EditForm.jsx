import React, { useContext, useState } from 'react'
import HintMessage from './HintMessage'
import OrderContext from '../../../../../../context/OrderContext'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'
import TextInput from '../../../../../reusable-ui/TextInput'
import ImagePreview from './ImagePreview'
import getInputConfig from '../../../../../../config/addFormInputConfig'
import { EMPTY_PRODUCT } from '../../../../../../enums/product'

function EditForm() {

  const {productSelected, handleEditProduct} = useContext(OrderContext)
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT)

  const handleChange = (event) => {
    const newValue = event.target.value
    const propertyName = event.target.name
    const productUpdated = {...productSelected, [propertyName]: newValue}
    setProductBeingEdited(productUpdated)
    handleEditProduct(productUpdated)
  }

  const inputs = getInputConfig(productSelected)

  return (
    // <div>
    //   <HintMessage />
    //   <span>{productSelected && productSelected.title}</span>
    // </div>
    <EditFormStyled action='submit'>
        <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
        <div className='inputFields'>
            {
                inputs.map((input) => {
                    return  <TextInput
                        {...input}
                        onChange={handleChange}
                        version="dark"
                        required 
                    />
                })
            }
        
        </div>
    </EditFormStyled>
      
  )
}

const EditFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    grid-row-gap: ${theme.spacing.xs};
    grid-column-gap: ${theme.spacing.md};
    
    .inputFields {
        grid-area: 1/2/4/2;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        margin-right: 20px;
    } 

    .submitButton {
        grid-area: 4/2/5/3;
        width: 50%;
    } 
`

export default EditForm