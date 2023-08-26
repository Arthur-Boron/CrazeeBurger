import React from 'react'
import { BsCartDashFill, BsCartXFill } from 'react-icons/bs'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme'

function ListedItem({title, imageSource, bottomDescription, quantity, className}) {
  return (
    <ListedItemStyled className={className}>
        <div className="delete-buttons">
            <div className='icon-container orange'>
                <BsCartDashFill className='icon'/>
            </div>
            <div className='icon-container red'>
                <BsCartXFill className='icon'/>
            </div>
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


    &:hover {
        .delete-buttons {
            border: none;
            cursor: pointer;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 70px;
            border-top-right-radius: ${theme.borderRadius.round};
            border-bottom-right-radius: ${theme.borderRadius.round};
            overflow: hidden;
            color: ${theme.colors.white};
            display: flex;
            flex-direction: column; 
            align-items: stretch; 

            .icon-container {
                width: 100%;
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                .icon {
                    width: ${theme.fonts.size.P3};
                }
    
                &:hover {
                    color: ${theme.colors.redSecondary};
                }
            }
            
            .orange {
                background: ${theme.colors.primary};
            }

            .red {
                background: ${theme.colors.primary_line};
            }
        }
    }
`

export default ListedItem