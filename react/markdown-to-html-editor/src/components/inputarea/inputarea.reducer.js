const userInput = function(state = "", action) {
  return action.payload ? action.payload : state
}

export default userInput;
