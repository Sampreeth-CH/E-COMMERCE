import { createSlice } from '@reduxjs/toolkit'

const productListSlice = createSlice({
  name: 'productList',
  initialState: { products: [], loading: false, error: null },
  reducers: {
    request: (state) => {
      state.loading = true
      state.products = []
    },
    success: (state, action) => {
      state.loading = false
      state.products = action.payload.products
      state.page = action.payload.page
      state.pages = action.payload.pages
    },
    fail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { request, success, fail } = productListSlice.actions
export default productListSlice.reducer
