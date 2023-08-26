import { styled } from 'styled-components'
import { theme } from '../../../../../theme'
import ListedItem from './ListedItem';
import { formatPrice } from '../../../../../utils/maths';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import { IMG_BY_DEFAULT } from '../../../../../enums/product';

function BasketBody({basketDetails}) {

    const {isModeAdmin, handleDeleteFromBasket, handleProductSelected} = useContext(OrderContext)

    const handleDeleteAllQuantityFromCart = (event, {id}) => {
        event.stopPropagation()
        handleDeleteFromBasket(id, 0)
    }

    const handleDeleteOneQuantityFromCart = (event, {id, quantity}) => {
        event.stopPropagation()
        handleDeleteFromBasket(id, quantity -1)
    }

    const handleClick = ({id}) => {
        if (isModeAdmin) {
            handleProductSelected(id)
        }
    }

    return (
        <BasketBodyStyled>
            {basketDetails.map(({ id, quantity, title, imageSource, price }) => {
                const finalImageSource = imageSource && imageSource !== "" ? imageSource : IMG_BY_DEFAULT;
                return (
                    <ListedItem 
                        key={id} 
                        title={title} 
                        imageSource={finalImageSource} 
                        bottomDescription={formatPrice(price)}
                        quantity={quantity}
                        onDelete={(event) => handleDeleteAllQuantityFromCart(event, {id})}
                        onSuppressOneElement={(event) =>handleDeleteOneQuantityFromCart(event, {id, quantity})}
                        isClickable={isModeAdmin}
                        onClick={() => handleClick({id})}
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