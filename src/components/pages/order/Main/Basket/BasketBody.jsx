import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import ListedItem from './ListedItem';
import { formatPrice } from '../../../../../utils/maths';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';

function BasketBody({basketDetails}) {

    const {isModeAdmin, handleDeleteFromBasket} = useContext(OrderContext)

    const handleDeleteAllQuantityFromCart = ({id}) => {
        handleDeleteFromBasket(id, 0)
    }

    const handleDeleteOneQuantityFromCart = ({id, quantity}) => {
        handleDeleteFromBasket(id, quantity -1)
    }

    return (
        <BasketBodyStyled>
            {basketDetails.map(({ id, quantity, title, finalImageSource, price }) => {
                return (
                    <ListedItem 
                        key={id} 
                        title={title} 
                        imageSource={finalImageSource} 
                        bottomDescription={formatPrice(price)}
                        quantity={quantity}
                        onDelete={() => handleDeleteAllQuantityFromCart({id})}
                        onSuppressOneElement={() =>handleDeleteOneQuantityFromCart({id, quantity})}
                        isClickable={isModeAdmin}
                    />
                );
        })}
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