import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../theme'
import PrimaryButton from './PrimaryButton'

function Card({title, imageSource, leftDescription}) {
  return (
    <CardStyled className="product">
      <div className="image-container">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" Label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    background-color: ${theme.colors.white};
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    padding: 35px 20px 10px 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 65% 1fr;

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
            font-size: ${theme.fonts.P4};
            font-weight: ${theme.weights.bold};
            font-family: 'Amatic SC', cursive;
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
                font-weight: ${theme.weights.medium};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: ${theme.weights.medium};
                color: ${theme.colors.primary};
            }

            .right-description {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: ${theme.fonts.P1};

                .primary-button {
                    font-size: ${theme.fonts.XS};
                    padding: ${theme.spacing.sm};
                }
            }
        }
    }
`

export default Card