import axios from 'axios'
import { request, success, fail } from '../reducers/productReducers'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(request())
    const { data } = await axios.get('/api/products')
    dispatch(success(data))
  } catch (error) {
    dispatch(fail(error.response?.data.message || error.message))
  }
}
