import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './reducers/productReducers'
import productDetailsReducer from './reducers/productDetailsReducers'
import { productDeleteReducer } from './reducers/productDeleteReducers.js'
import { productCreateReducer } from './reducers/productCreateReducers.js'
import { cartReducer } from './reducers/cartReducers'
import userLoginReducer from './reducers/userReducers.js'
import userRegisterReducer from './reducers/userRegisterReducers.js'
import { userDetailsReducer } from './reducers/userDetailsReducers.js'
import { userUpdateProfileReducer } from './reducers/userUpdateProfileReducers.js'
import { productUpdateReducer } from './reducers/productUpdateReducers.js'
import { productReviewCreateReducer } from './reducers/productReviewCreateReducers.js'
import { productTopRatedReducer } from './reducers/productTopRatedReducer.js'
import {
  userListReducer,
  userDeleteReducer,
} from './reducers/userListReducers.js'
import { userUpdateReducer } from './reducers/userUpdateReducers.js'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from './reducers/orderReducers.js'

const localStorageCartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const localStorageUserInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const localStorageShippingAddress = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
  },
  preloadedState: {
    cart: {
      cartItems: localStorageCartItems,
      shippingAddress: localStorageShippingAddress,
    },
    userLogin: { userInfo: localStorageUserInfo },
  },
})

export default store
