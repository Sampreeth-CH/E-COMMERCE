import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }
  return (
    <Form
      onSubmit={submitHandler}
      className='d-flex mx-auto my-2 my-lg-0'
      style={{ maxWidth: '420px', width: '100%' }}
    >
      <Form.Control
        type='text'
        name='q'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='me-2'
      />
      <Button type='submit' variant='outline-success'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
