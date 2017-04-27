const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return state.concat([{user: action.payload.user, msg: action.payload.msg}]);
    default:
      return state
  }
}

export default messages;
