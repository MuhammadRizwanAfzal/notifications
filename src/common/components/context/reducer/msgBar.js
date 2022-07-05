export function msgBarReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_MSG_BAR':
        return action.value;
      default:
        throw new Error();
    }
  }
