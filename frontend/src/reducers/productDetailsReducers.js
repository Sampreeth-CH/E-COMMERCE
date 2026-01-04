import { createSlice } from '@reduxjs/toolkit'

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: { product: { reviews: [] }, loading: false, error: null },
  reducers: {
    request: (state) => {
      state.loading = true
      state.error = null
    },
    success: (state, action) => {
      state.loading = false
      state.product = action.payload
    },
    fail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  request: productDetailsRequest,
  success: productDetailsSuccess,
  fail: productDetailsFail,
} = productDetailsSlice.actions

export default productDetailsSlice.reducer
