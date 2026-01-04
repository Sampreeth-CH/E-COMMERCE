export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_DELETE_REQUEST':
      return { loading: true }
    case 'PRODUCT_DELETE_SUCCESS':
      return { loading: false, success: true }
    case 'PRODUCT_DELETE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
