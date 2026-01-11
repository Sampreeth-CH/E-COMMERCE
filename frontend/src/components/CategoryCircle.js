import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CategoryCircle = ({ category }) => {
  const navigate = useNavigate()

  return (
    <Card
      onClick={() => navigate(`/category/${category.name}`)}
      className='text-center shadow-sm mb-3'
      style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card.Body className='p-2 d-flex flex-column justify-content-center align-items-center'>
        <img
          src={category.image}
          alt={category.name}
          style={{
            width: '45px',
            height: '45px',
            objectFit: 'contain',
          }}
        />
        <small className='mt-2 fw-semibold text-capitalize'>
          {category.name}
        </small>
      </Card.Body>
    </Card>
  )
}

export default CategoryCircle
