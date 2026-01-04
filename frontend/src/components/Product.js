import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded product-card'>
        <Link to={`/product/${product._id}`}>
          <div className='product-image-wrapper'>
            <CardImg
              src={product.images}
              variant='top'
              className='product-image'
            />
          </div>
        </Link>
        <Card.Body as='div'>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.reviews.length} reviews`}
            />
          </Card.Text>
          <Card.Text as='h3'>₹ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
