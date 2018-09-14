import React from 'react'
import styled from 'react-emotion'
import img_1 from '../../img/test_1.jpg'

export default class ProductGallery extends React.Component {
  render() {
    return(
      <ProductGalleryContainer>
        <ProductImgContainer>
          <img src={img_1} />
        </ProductImgContainer>
        <ProductImgContainer>
          <img src={img_1} />
        </ProductImgContainer>
      </ProductGalleryContainer>

    )
  }
}

const ProductGalleryContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
`

const ProductImgContainer = styled('div')`
  width: 30%;
  margin-right: 20px;
  img {
    width: 100%;
    height: auto;
  }
`
