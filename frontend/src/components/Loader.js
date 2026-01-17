import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div
      style={{
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Spinner
        animation='border'
        role='status'
        style={{ width: '4rem', height: '4rem' }}
      />
      <span className='mt-3 fw-semibold text-muted'>
        Loading, please wait...
      </span>
    </div>
  )
}

export default Loader
