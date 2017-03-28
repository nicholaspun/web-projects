const initialState = {
  fetching: false,
  fetched: false,
  photos: [],
  error: null,
};

const photoReducer = function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PHOTOS_PENDING": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_PHOTOS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        photos: action.payload
      }
    }
    case "FETCH_PHOTOS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

export default photoReducer;
