import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

const CategoryScreen = () => {
  const { categoryName } = useParams()
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const filteredProducts = products.filter(
    (product) => product.category?.toLowerCase() === categoryName.toLowerCase()
  )

  return (
    <>
      <h1 className='mb-4 text-capitalize'>{categoryName}</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {filteredProducts.length === 0 ? (
            <Message>No products found</Message>
          ) : (
            filteredProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))
          )}
        </Row>
      )}
    </>
  )
}

export default CategoryScreen
