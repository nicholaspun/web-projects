import { FETCH_PHOTOS_FULFILLED } from "../actions/fetchphotos"

const maxPages = function(state = 0, action) {
  if (action.type === FETCH_PHOTOS_FULFILLED) {
    return action.total_pages;
  }
  else return state;
}

export default maxPages;
