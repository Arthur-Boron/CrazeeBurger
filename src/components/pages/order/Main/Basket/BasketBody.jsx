import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import ListedItem from './ListedItem';
import { formatPrice } from '../../../../../utils/maths';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import { IMG_BY_DEFAULT } from '../../../../../enums/product';
import AuthContext from '../../../../../context/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';

function BasketBody({basketDetails}) {

    const {isModeAdmin, productSelected, handleDeleteFromBasket, handleProductSelected} = useContext(OrderContext)
    const {user} = useContext(AuthContext)

    const handleDeleteAllQuantityFromCart = (event, {id}) => {
        event.stopPropagation()
        handleDeleteFromBasket(id, 0, user.id)
    }

    const handleDeleteOneQuantityFromCart = (event, {id, quantity}) => {
        event.stopPropagation()
        handleDeleteFromBasket(id, quantity -1, user.id)
    }

    return (
        <BasketBodyStyled>
            <AnimatePresence>
                {basketDetails.map(({ id, quantity, title, imageSource, price }) => {
                    const finalImageSource = imageSource && imageSource !== "" ? imageSource : IMG_BY_DEFAULT;
                    const isSelected = productSelected.id == id
                    return (
                        <motion.div 
                            key={id}
                            initial={{ x: '100%' }}
                            animate={{ x: '0%' }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3 }}
                        >
                            <ListedItem 
                                key={id} 
                                title={title} 
                                imageSource={finalImageSource} 
                                bottomDescription={formatPrice(price)}
                                quantity={quantity}
                                onDelete={(event) => handleDeleteAllQuantityFromCart(event, {id})}
                                onSuppressOneElement={(event) =>handleDeleteOneQuantityFromCart(event, {id, quantity})}
                                isClickable={isModeAdmin}
                                isSelected={isSelected}
                                onClick={() => handleProductSelected(id)}
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </BasketBodyStyled>
    )
}

const BasketBodyStyled = styled.div`
    height: calc(95vh - 84px - 140px);
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    > :first-child {
        margin: ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.xs} ${theme.spacing.sm};
    }

    > :last-child:not(:only-child) {
        margin: ${theme.spacing.xs} ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm};
    }

    > :not(:first-child):not(:last-child) {
        margin: ${theme.spacing.xs} ${theme.spacing.sm};
    }
`

export default BasketBody