import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'

const getTabsConfig = (selectedTab) => 
    [
        {
            key: 'add',
            Icon: <AiOutlinePlus />,
            Label:"Ajouter un produit"
        },
        {
            key: 'edit',
            Icon: <MdModeEditOutline />,
            Label: "Modifier un produit"
        }
    ]
 

export default getTabsConfig