import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'

const getTabsConfig = (selectedTab) => 
    [
        {
            key: 'add',
            Icon: <AiOutlinePlus />,
            className: selectedTab == 'add' ? 'is-active' : '',
            Label:"Ajouter un produit"
        },
        {
            key: 'edit',
            Icon: <MdModeEditOutline />,
            className: selectedTab == 'edit' ? 'is-active' : '',
            Label: "Modifier un produit"
        }
    ]
 

export default getTabsConfig