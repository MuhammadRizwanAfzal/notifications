export function redirectUrlReducer(state, action) {
  switch (action.type) {
    case "UPDATE_REDIRECT_URL":
      var { url, state, enable } = action.value;
      return { ...state, url, state, enable };
    case "UPDATE_REDIRECT_STATUS":
      var { enable } = action.value;
      return { ...state, enable };
    default:
      throw new Error();
  }
}
