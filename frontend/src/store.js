import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './reducers/productReducers'
import productDetailsReducer from './reducers/productDetailsReducers'
import { cartReducer } from './reducers/cartReducers'
import userLoginReducer from './reducers/userReducers.js'
import userRegisterReducer from './reducers/userRegisterReducers.js'

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
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
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
