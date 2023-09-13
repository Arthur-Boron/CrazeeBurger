import { MdOutlineEuro } from 'react-icons/md'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaHamburger } from 'react-icons/fa'
import { BiPackage } from 'react-icons/bi'
import { GoMegaphone } from 'react-icons/go'

const getInputConfig = (newProduct) => 
    [
        {
            id: 'title',
            key: 'title',
            name:"title",
            className:"title",
            value:newProduct.title,
            Icon: <FaHamburger />,
            placeholder:'Nom du produit',
            type:"text",
            required:true
        },
        {
            id: 'imageSource',
            key: 'imageSource',
            name:"imageSource",
            className:"imageSource",
            value:newProduct.imageSource,
            Icon:<BsFillCameraFill />,
            placeholder:"Lien URL d'une image",
            type:"text"
        },
        {
            id: 'price',
            key: 'price',
            name:"price",
            value: newProduct.price ? newProduct.price : '',
            Icon:<MdOutlineEuro />,
            placeholder:"Prix",
            type:"number",
            required:true
        },
        {
            id: 'availability',
            key: 'availability',
            name:"isAvailable",
            value: newProduct.isAvailable,
            options: [
                { value: true, label: 'En Stock' },
                { value: false, label: 'En rupture' },
              ],
            Icon:<BiPackage />,
            type:"select"
        },
        {
            id: 'advertised',
            key: 'advertised',
            name:"isAdvertised",
            value: newProduct.isAdvertised,
            options: [
                { value: true, label: 'Avec pub' },
                { value: false, label: 'Sans pub' },
              ],
            Icon:<GoMegaphone />,
            type:"select",
        }
    ]
 

export default getInputConfig