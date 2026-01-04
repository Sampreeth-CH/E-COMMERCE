export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_TOP_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_TOP_SUCCESS':
      return { loading: false, products: action.payload }
    case 'PRODUCT_TOP_FAIL':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
