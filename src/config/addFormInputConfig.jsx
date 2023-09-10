import { MdOutlineEuro } from 'react-icons/md'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaHamburger } from 'react-icons/fa'

const getInputConfig = (newProduct) => 
    [
        {
            id: 'title',
            key: 'title',
            name:"title",
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
        }
    ]
 

export default getInputConfig