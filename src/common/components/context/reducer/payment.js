export function paymentReducer(state, action) {
  switch (action.type) {
    case "UPDATE_PAYMENT":
      return { ...state, status: action.value };
    default:
      throw new Error();
  }
}
