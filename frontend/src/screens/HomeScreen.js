import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import { Link, useParams } from 'react-router-dom'
import Paginate from '../components/Paginate.js'
import ProductCarousel from '../components/ProductCarousel.js'
import categories from '../data/categories.js'
import CategoryCircle from '../components/CategoryCircle.js'

const HomeScreen = () => {
  const keyword = useParams().keyword

  const pageNumber = useParams().pageNumber || 1
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, pages, page } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      {!keyword && <ProductCarousel />}
      {!keyword && (
        <>
          <h1 className='my-4'>Shop by Category</h1>
          <Row className='justify-content-center mb-5'>
            {categories.map((category) => (
              <Col
                key={category.name}
                xs={6}
                sm={4}
                md={2}
                className='d-flex justify-content-center'
              >
                <CategoryCircle category={category} />
              </Col>
            ))}
          </Row>
        </>
      )}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {products.length === 0 ? (
            <>
              <Message variant='info'>
                🔍 No products found for "{keyword}"
              </Message>
              <Link className='btn btn-dark my-3' to='/'>
                Go Back
              </Link>
            </>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
