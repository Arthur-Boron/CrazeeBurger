import { css, styled } from 'styled-components'
import { theme } from '../../theme'
import Button from './Button'
import {TiDelete} from 'react-icons/ti'
import {motion} from 'framer-motion'

function Card({title, imageSource, leftDescription, hasDeleteButton, onAddProductInBasket, onDelete, onClick, isHoverable, isSelected, isOverlapImage, overlapImageSource}) {

  return (
    <CardStyled className="product" onClick={onClick} $isHoverable={isHoverable} $isSelected={isSelected}>
      {isOverlapImage && (
        <div className='overlap'>
          <div className='transparent-layer'></div>
          <img className='overlap-image' src={overlapImageSource} />
        </div>
      )}
      {hasDeleteButton && (
        <motion.button className='delete-button' aria-label='delete-button' onClick={onDelete}
          initial={{ opacity: 0, x: '80%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TiDelete className='icon' />
        </motion.button>)}
      <motion.div className="image-container"
        key={imageSource}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <img src={imageSource} alt={title} />
      </motion.div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <Button className="primary-button" Label={"Ajouter"} version={isSelected && isHoverable ? 'secondary' : 'primary'} onClick={onAddProductInBasket} />
          </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    user-select: none;
    background-color: ${theme.colors.white};
    width: 240px;
    height: 330px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    padding: 35px 20px 10px 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 65% 1fr;
    position: relative;

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;

      &:hover {
        color: ${theme.colors.red};
      }

      .icon {
        width: 100%;
        height: 100%;
      }

    }

    .overlap {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .transparent-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 70%;
        background: snow;
        border-radius: ${theme.borderRadius.extraRound};
      }

      .overlap-image {
        width: 200px;
        height: 160px;
        object-fit: contain;
        z-index: 1;
      }
    }

    .image-container {
        width: 200px;
        height: 160px;
    
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .info-text {
        display: grid;
        grid-template-rows: 30% 70%;
        padding: 5px;

        .title {
            margin: auto 0;
            position: relative;
            bottom: 15px;
            font-size: ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.bold};
            font-family: ${theme.fonts.family.stylish};
            color: ${theme.colors.dark};
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
        }

        .description {
            display: grid;
            grid-template-columns: 1fr 1fr;

            .left-description {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: ${theme.fonts.weights.medium};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: ${theme.fonts.weights.medium};
                color: ${theme.colors.primary};
            }

            .right-description {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: ${theme.fonts.size.P1};

                .primary-button {
                    font-size: ${theme.fonts.size.XS};
                    margin: ${theme.spacing.xs} 0px;
                }
            }
        }
    }

    ${({$isHoverable}) => $isHoverable && hoverableStyle }
    ${({$isHoverable, $isSelected}) => $isSelected && $isHoverable && selectedStyle }
`

const hoverableStyle = css`
  &:hover {
    transform :scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }

`

const selectedStyle = css`
  background-color: ${theme.colors.primary};

  .delete-button {
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.red};
    }
  }

  .info-text {
      .description {
        .left-description {
            color: ${theme.colors.white};
        }
      }
  }
`

export default Card