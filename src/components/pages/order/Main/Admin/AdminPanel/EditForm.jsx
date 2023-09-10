import { useContext } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import getInputConfig from '../../../../../../config/addFormInputConfig'
import EditFormMessage from './EditFormMessage'
import Form from '../../../../../reusable-ui/Form'
import AuthContext from '../../../../../../context/AuthContext'

function EditForm() {

  const {productSelected, handleEditProduct, setProductSelected, titleInputRef} = useContext(OrderContext)
  const {user} = useContext(AuthContext)

  const handleChange = (event) => {
    const newValue = event.target.value
    const propertyName = event.target.name
    const productUpdated = {...productSelected, [propertyName]: newValue}
    setProductSelected(productUpdated)
    handleEditProduct(productUpdated, user.id)
  }

  const inputs = getInputConfig(productSelected)

  return (
    <Form onChange={handleChange} data={inputs} product={productSelected} ref={titleInputRef}>
        <EditFormMessage />
    </Form>
      
  )
}

export default EditForm