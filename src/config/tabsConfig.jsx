import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
import AddForm from '../components/pages/order/Main/Admin/AdminPanel/AddForm'
import EditForm from '../components/pages/order/Main/Admin/AdminPanel/EditForm'
import HintMessage from '../components/pages/order/Main/Admin/AdminPanel/HintMessage'

const getTabsConfig = (hasAlreadyBeenClicked) => 
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
            Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />
        }
    ]
 

export default getTabsConfig