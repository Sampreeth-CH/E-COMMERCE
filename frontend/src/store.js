import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './reducers/productReducers'
import productDetailsReducer from './reducers/productDetailsReducers'
import { cartReducer } from './reducers/cartReducers'

const localStorageCartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartItems: localStorageCartItems,
    },
  },
})

export default store
