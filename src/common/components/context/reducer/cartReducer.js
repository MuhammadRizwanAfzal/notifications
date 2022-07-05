export function cartInfoReducer(state, action) {
  switch (action.type) {
    case "GO_TO_STEP":
      return { ...state, step: action.payload };
    case "UPDATE_CART":
      return {
        ...state,
        cart: {
          ...action.payload,
          isLoading: action.isLoading || false,
        },
      };
    case "UPDATE_BUYNOW":
      return { ...state, buyNow: action.payload };
    case "UPDATE_PAYMENT":
      return { ...state, payment: action.payload };
    default:
      throw new Error();
  }
}
