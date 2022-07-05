export function cartMsgBarReducer(state, action) {
  switch (action.type) {
    case "UPDATE_CART_MSG_BAR":
      return action.value;
    default:
      throw new Error();
  }
}
