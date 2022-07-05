export function userAgentReducer(_, action) {
  switch (action.type) {
    case "UPDATE_USER_AGENT":
      return action.payload;
    default:
      throw new Error();
  }
}
