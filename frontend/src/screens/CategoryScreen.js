import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'

const CategoryScreen = () => {
  const { categoryName } = useParams()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true)

        const { data } = await axios.get('/api/products?pageNumber=1')

        let allProducts = Array.isArray(data.products) ? data.products : []
        const totalPages = data.pages || 1

        for (let i = 2; i <= totalPages; i++) {
          const res = await axios.get(`/api/products?pageNumber=${i}`)
          const pageProducts = Array.isArray(res.data.products)
            ? res.data.products
            : []
          allProducts = [...allProducts, ...pageProducts]
        }

        const filtered = allProducts.filter(
          (p) =>
            p?.category &&
            p.category.toLowerCase().trim() ===
              categoryName.toLowerCase().trim()
        )

        setProducts(filtered)
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            'Error fetching products'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchAllProducts()
  }, [categoryName])

  return (
    <>
      <h1 className='mb-4 text-capitalize'>{categoryName}</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.length === 0 ? (
            <Message>No products found</Message>
          ) : (
            products.map((product) => (
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
