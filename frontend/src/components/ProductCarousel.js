// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Carousel, Image } from 'react-bootstrap'
// import Loader from './Loader'
// import Message from './Message'
// import { listTopProducts } from '../actions/productActions'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'

// const ProductCarousel = () => {
//   const dispatch = useDispatch()
//   const productTopRated = useSelector((state) => state.productTopRated)
//   const { loading, error, products } = productTopRated

//   useEffect(() => {
//     dispatch(listTopProducts())
//   }, [dispatch])

//   return loading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant='danger'>{error}</Message>
//   ) : (
//     <Carousel pause='hover' className='bg-dark'>
//       {products.map((product) => (
//         <Carousel.Item key={product._id}>
//           <Link to={`/product/${product._id}`}>
//             <Image src={product.images} alt={product.name} fluid />
//             <Carousel.Caption className='carousel-caption'>
//               <h2>
//                 {product.name} (₹{product.price})
//               </h2>
//             </Carousel.Caption>
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   )
// }

// export default ProductCarousel
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  if (loading) return <Loader />
  if (error) return <Message variant='danger'>{error}</Message>

  return (
    <Carousel pause='hover' indicators className='featured-carousel premium'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link
            to={`/product/${product._id}`}
            className='featured-carousel-link'
          >
            <div className='featured-carousel-content premium-bg'>
              <div className='featured-carousel-text'>
                <span className='featured-badge'>Top Rated</span>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
              </div>

              <div className='image-wrapper'>
                <Image
                  src={product.images}
                  alt={product.name}
                  className='featured-carousel-image premium-image rounded-image'
                />
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
