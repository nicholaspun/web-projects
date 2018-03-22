// Actions are just objects with TWO things:
//  - type
//  - any other data you need --> try to limit this!

// These are known as ACTION CREATORS
// - They put the actions togther and dispatch them

// Increment
export function increment(index) {
  // index tells us which photo to increment
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add Comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove Comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// Location Change handled by React-Router-Redux --> uneeded here
