import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
import AddForm from '../components/pages/order/Main/Admin/AdminPanel/AddForm'
import EditForm from '../components/pages/order/Main/Admin/AdminPanel/EditForm'

const getTabsConfig = () => 
    [
        {
            key: 'add',
            Icon: <AiOutlinePlus />,
            Label:"Ajouter un produit",
            Content: <AddForm />
        },
        {
            key: 'edit',
            Icon: <MdModeEditOutline />,
            Label: "Modifier un produit",
            Content: <EditForm />
        }
    ]
 

export default getTabsConfig