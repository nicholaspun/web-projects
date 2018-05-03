import { FETCH_PHOTOS_FULFILLED } from "../actions/fetchphotos"

const onPage = function(state = 0, action = undefined) {
  if (action.type === FETCH_PHOTOS_FULFILLED) {
    return action.current_page;
  }
  else return state;
}

export default onPage;
