import api from '../api/axios'
import { request, success, fail } from '../reducers/productReducers'
import {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} from '../reducers/productDetailsReducers'

export const listProducts =
  (keyword = '', category = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch(request())
      const { data } = await api.get(
        `/api/products?keyword=${keyword}&category=${category}&pageNumber=${pageNumber}`
      )
      dispatch(success(data))
    } catch (error) {
      dispatch(fail(error.response?.data.message || error.message))
    }
  }

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailsRequest())

    const { data } = await api.get(`/api/products/${id}`)

    dispatch(productDetailsSuccess(data))
  } catch (error) {
    dispatch(productDetailsFail(error.response?.data.message || error.message))
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'PRODUCT_DELETE_REQUEST' })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await api.delete(`/api/products/${id}`, config)

    dispatch({
      type: 'PRODUCT_DELETE_SUCCESS',
    })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DELETE_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'PRODUCT_CREATE_REQUEST' })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await api.post('/api/products', {}, config)

    dispatch({
      type: 'PRODUCT_CREATE_SUCCESS',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_CREATE_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'PRODUCT_UPDATE_REQUEST' })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await api.put(
      `/api/products/${product._id}`,
      product,
      config
    )

    dispatch({
      type: 'PRODUCT_UPDATE_SUCCESS',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_UPDATE_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: 'PRODUCT_CREATE_REVIEW_REQUEST' })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      await api.post(`/api/products/${productId}/reviews`, review, config)

      dispatch({
        type: 'PRODUCT_CREATE_REVIEW_SUCCESS',
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_CREATE_REVIEW_FAIL',
        payload: error.response?.data?.message || error.message,
      })
    }
  }

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_TOP_REQUEST' })
    const { data } = await api.get(`/api/products/top`)
    dispatch({ type: 'PRODUCT_TOP_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_TOP_FAIL',
      payload: error.response?.data.message || error.message,
    })
  }
}
