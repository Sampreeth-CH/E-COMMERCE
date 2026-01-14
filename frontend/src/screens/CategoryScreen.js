import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import api from '../api/axios'

const CategoryScreen = () => {
  const { categoryName } = useParams()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true)

        const { data } = await api.get('/api/products?pageNumber=1')

        let allProducts = Array.isArray(data.products) ? data.products : []
        const totalPages = data.pages || 1

        for (let i = 2; i <= totalPages; i++) {
          const res = await api.get(`/api/products?pageNumber=${i}`)
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

  const [ratingFilter, setRatingFilter] = useState('')
  const [priceFilter, setPriceFilter] = useState('')
  const [sort, setSort] = useState('latest')

  const getFilteredProducts = () => {
    let filtered = [...products]

    // Rating filter
    if (ratingFilter) {
      filtered = filtered.filter(
        (p) => p.rating && p.rating >= parseInt(ratingFilter)
      )
    }

    // Price filter
    if (priceFilter) {
      filtered = filtered.filter((p) => {
        if (!p.price) return false
        switch (priceFilter) {
          case 'under-10000':
            return p.price < 10000
          case '10000-50000':
            return p.price >= 10000 && p.price <= 50000
          default:
            return true
        }
      })
    }

    // Sorting
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'latest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    return filtered
  }
  const filteredProducts = getFilteredProducts()

  const clearFilters = () => {
    setRatingFilter('')
    setPriceFilter('')
    setSort('latest')
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <div className='d-flex align-items-center justify-content-between mb-3'>
        <h1 className='text-capitalize'>{categoryName}</h1>
        <Button variant='outline-secondary' onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>

      <Card className='p-3 mb-4 shadow-sm border-0'>
        <Row className='g-3'>
          {/* Rating Filter */}
          <Col md={4}>
            <Form.Select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className='shadow-sm'
            >
              <option value=''>Filter by Rating</option>
              <option value='4'>4★ & above</option>
              <option value='3'>3★ & above</option>
            </Form.Select>
          </Col>

          {/* Price Filter */}
          <Col md={4}>
            <Form.Select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className='shadow-sm'
            >
              <option value=''>Price Range</option>
              <option value='under-10000'>Under ₹10,000</option>
              <option value='10000-50000'>₹10,000 – ₹50,000</option>
            </Form.Select>
          </Col>

          {/* Sorting */}
          <Col md={4}>
            <Form.Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className='shadow-sm'
            >
              <option value='latest'>Latest</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>
      </Card>

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
