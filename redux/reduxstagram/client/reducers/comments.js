function postComments(state = [], action) {
  // This is a helper for comments()!
  switch(action.type) {
    case 'ADD_COMMENT':
      // return existing state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i), // before the one to delete
        ...state.slice(action.i + 1) // after the one to delete
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this psot with a new one --> Reducer Composition
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
