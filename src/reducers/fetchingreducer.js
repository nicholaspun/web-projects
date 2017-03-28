import { FETCH_PHOTOS_PENDING } from "../actions/fetchphotos"

const fetching = function(state = false, action) {
  return action.type === FETCH_PHOTOS_PENDING
}

export default fetching;
