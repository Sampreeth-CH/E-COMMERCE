export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_CREATE_REVIEW_REQUEST':
      return { loading: true }
    case 'PRODUCT_CREATE_REVIEW_SUCCESS':
      return { loading: false, success: true }
    case 'PRODUCT_CREATE_REVIEW_FAIL':
      return { loading: false, error: action.payload }
    case 'PRODUCT_CREATE_REVIEW_RESET':
      return {}
    default:
      return state
  }
}
