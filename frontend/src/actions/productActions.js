import axios from 'axios'
import { request, success, fail } from '../reducers/productReducers'
import {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} from '../reducers/productDetailsReducers'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(request())
    const { data } = await axios.get('/api/products')
    dispatch(success(data))
  } catch (error) {
    dispatch(fail(error.response?.data.message || error.message))
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailsRequest())

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(productDetailsSuccess(data))
  } catch (error) {
    dispatch(productDetailsFail(error.response?.data.message || error.message))
  }
}
