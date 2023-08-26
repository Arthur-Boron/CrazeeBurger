import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { styled } from 'styled-components'
import { theme } from '../../theme'

function ListedItem({title, imageSource, bottomDescription, quantity, className}) {
  return (
    <ListedItemStyled className={className}>
        <div className="delete-buttons">
            <MdDeleteForever className='icon'/>
        </div>  
        <div className="image-container">
            <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
            <div className="description">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="bottom-description">{bottomDescription}</div>
            </div>
            
            <div className="quantity">
                x {quantity}
            </div>
        </div>
    </ListedItemStyled>
  )
}

const ListedItemStyled = styled.div`
    box-sizing: border-box;
    height: 90px;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    display: grid;
    grid-template-columns: 30% 1fr;
    border-radius: ${theme.borderRadius.round};
    box-shadow: ${theme.shadows.cardBasket};
    position: relative;

    .image-container {
        box-sizing: border-box;
        height: 70px;

        img {
            padding: 5px;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }

    .info-text {
        display: grid;
        grid-template-columns: 75% 1fr;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.primary};

        .description {
            display: grid;
            grid-template-rows: 60% 40%;
            margin-left: ${theme.spacing.md};

            .title {
                display: flex;
                align-items: center;
                font-family: ${theme.fonts.family.stylish};
                font-size: ${theme.fonts.size.P3};
                line-height: ${theme.spacing.lg};
                font-weight: ${theme.fonts.weights.bold};
                color: ${theme.colors.dark};
                min-width: 0;

                span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }

            .price {
                font-size: ${theme.fonts.size.SM};
                font-weight: ${theme.fonts.weights.medium};
            }
        }
    }

    .quantity {
        box-sizing: border-box;
        font-weight: ${theme.fonts.weights.medium};
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: ${theme.fonts.size.SM};
    }

    .delete-buttons {
        display: none;
        z-index: 1;
    }


    :hover {
        .delete-buttons {
            border: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 76px;
            border-top-right-radius: ${theme.borderRadius.round};
            border-bottom-right-radius: ${theme.borderRadius.round};
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${theme.colors.red};
            color: ${theme.colors.white};
            cursor: pointer;

            .icon {
                width: ${theme.fonts.size.P3};
                height: ${theme.fonts.size.P3};
            }

            &:hover {
                text-decoration: underline;

                .icon {
                    color: ${theme.colors.dark};
                }
            }
        }
    }
`

export default ListedItem