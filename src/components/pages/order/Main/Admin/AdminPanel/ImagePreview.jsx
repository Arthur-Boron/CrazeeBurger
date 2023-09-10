import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../../theme'
import { AnimatePresence, motion } from 'framer-motion'

function ImagePreview({imageSource, title}) {
  return (
    <AnimatePresence mode='wait'>
      <ImagePreviewStyled
        key={imageSource}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
          {imageSource ? <img src={imageSource} alt={title} /> : <div className='empty-image'>Aucune Image</div>}
      </ImagePreviewStyled>
    </AnimatePresence>
  )
}

const ImagePreviewStyled = styled(motion.div)`
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