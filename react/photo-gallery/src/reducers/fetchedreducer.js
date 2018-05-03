import { FETCH_PHOTOS_FULFILLED } from "../actions/fetchphotos"

const fetched = function(state = false, action) {
  return action.type === FETCH_PHOTOS_FULFILLED;
}

export default fetched;
