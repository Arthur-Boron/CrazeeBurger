import React, { useContext } from 'react'
import HintMessage from './HintMessage'
import OrderContext from '../../../../../../context/OrderContext'

function EditForm() {

  const {productSelected} = useContext(OrderContext)

  return (
    <div>
      <HintMessage />
      <span>{productSelected && productSelected.title}</span>
    </div>
      
  )
}

export default EditForm