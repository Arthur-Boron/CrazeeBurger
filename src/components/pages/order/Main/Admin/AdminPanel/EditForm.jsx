import { useContext } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import getInputConfig from '../../../../../../config/addFormInputConfig'
import EditFormMessage from './EditFormMessage'
import Form from '../../../../../reusable-ui/Form'

function EditForm() {

  const {productSelected, handleEditProduct, titleInputRef} = useContext(OrderContext)

  const handleChange = (event) => {
    const newValue = event.target.value
    const propertyName = event.target.name
    const productUpdated = {...productSelected, [propertyName]: newValue}
    handleEditProduct(productUpdated)
  }

  const inputs = getInputConfig(productSelected)

  return (
    <Form onChange={handleChange} data={inputs} product={productSelected} titleInputRef={titleInputRef}>
        <EditFormMessage />
    </Form>
      
  )
}

export default EditForm