import { FETCH_PHOTOS_FULFILLED } from "../actions/fetchphotos";

const photos = function(state = [], action) {
  return action.type === FETCH_PHOTOS_FULFILLED ? action.payload : state;
}

export default photos;
