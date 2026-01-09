import api from '../api/axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../reducers/userReducers'

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
} from '../reducers/userRegisterReducers'
import { toast } from 'react-toastify'

export const Login = (email, password) => async (dispatch) => {
  try {
    dispatch(USER_LOGIN_REQUEST())

    const { data } = await api.post('/api/users/login', {
      email,
      password,
    })

    dispatch(USER_LOGIN_SUCCESS(data))
    toast.success('Logged in Successfully')
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch(USER_LOGIN_FAIL(error.response?.data?.message || error.message))
  }
}

export const Register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(USER_REGISTER_REQUEST())

    const { data } = await api.post('/api/users', {
      name,
      email,
      password,
    })

    dispatch(USER_REGISTER_SUCCESS(data))
    dispatch(USER_LOGIN_SUCCESS(data))

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch(USER_REGISTER_FAIL(error.response?.data?.message || error.message))
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_DETAILS_REQUEST' })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await api.get(`/api/users/${id}`, config)
    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'USER_DETAILS_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const Logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch(USER_LOGOUT())
  dispatch({ type: 'USER_DETAILS_RESET' })
  dispatch({ type: 'ORDER_LIST_MY_RESET' })
  dispatch({ type: 'USER_LIST_RESET' })
  dispatch(USER_REGISTER_RESET())
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_UPDATE_PROFILE_REQUEST' })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await api.put('/api/users/profile', user, config)
    dispatch({ type: 'USER_UPDATE_PROFILE_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_PROFILE_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_LIST_REQUEST' })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await api.get('/api/users', config)
    dispatch({ type: 'USER_LIST_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'USER_LIST_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const deleteUsers = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_DELETE_REQUEST' })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await api.delete(`/api/users/${id}`, config)
    dispatch({ type: 'USER_DELETE_SUCCESS' })
  } catch (error) {
    dispatch({
      type: 'USER_DELETE_FAIL',
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_UPDATE_REQUEST' })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await api.put(`/api/users/${user._id}`, user, config)
    dispatch({ type: 'USER_UPDATE_SUCCESS' })
    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data })
    dispatch({ type: 'USER_DETAILS_RESET' })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(Logout())
    }
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload: message,
    })
  }
}
