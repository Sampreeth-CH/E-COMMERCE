import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)
  const navigate = useNavigate()
  const pid = useParams()

  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(() => {
    dispatch(listProductDetails(pid.id))
  }, [dispatch, pid])

  const addToCartHandler = () => {
    navigate(`/cart/${pid.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.images} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.reviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.stock > 0 ? 'In-Stock' : 'Out-Of-Stock'}</Col>
                  </Row>
                </ListGroup.Item>
                {product.stock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                    disabled={product.stock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
