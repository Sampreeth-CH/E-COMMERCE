import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
}

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    USER_LOGIN_REQUEST: (state) => {
      state.loading = true
      state.error = null
    },
    USER_LOGIN_SUCCESS: (state, action) => {
      state.loading = false
      state.userInfo = action.payload
    },
    USER_LOGIN_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    USER_LOGOUT: (state) => {
      state.userInfo = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} = userLoginSlice.actions

export default userLoginSlice.reducer
