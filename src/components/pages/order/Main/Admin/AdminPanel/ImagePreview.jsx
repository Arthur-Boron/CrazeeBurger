import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'

function ImagePreview({imageSource, title}) {
  return (
    <ImagePreviewStyled>
        {imageSource ? <img src={imageSource} alt={title} /> : <div className='empty-image'>Aucune Image</div>}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  grid-area: 1/1/4/2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding: 8px 0px;

  img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
  }

  .empty-image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
  }
`

export default ImagePreview