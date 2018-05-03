import { FETCH_PHOTOS_REJECTED } from "../actions/fetchphotos"

const error = function(state = null, action) {
  return action.type === FETCH_PHOTOS_REJECTED ? action.payload : null;
}

export default error;
