import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
}

const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    USER_REGISTER_REQUEST: (state) => {
      state.loading = true
      state.error = null
    },
    USER_REGISTER_SUCCESS: (state, action) => {
      state.loading = false
      state.userInfo = action.payload
    },
    USER_REGISTER_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} = userRegisterSlice.actions

export default userRegisterSlice.reducer
