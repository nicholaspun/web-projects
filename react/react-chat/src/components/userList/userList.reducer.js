const userList = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return action.payload
    default:
      return state
  }
}

export default userList;
