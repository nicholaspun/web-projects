import fetch from 'isomorphic-fetch';

export const FETCH_PHOTOS_PENDING = 'FETCH_PHOTOS_PENDING';
function requestPhotos() {
  return {
    type: "FETCH_PHOTOS_PENDING",
  }
}

export const FETCH_PHOTOS_FULFILLED = 'FETCH_PHOTOS_FULFILLED';
function receivePhotos(photo_json) {
  return {
    type: 'FETCH_PHOTOS_FULFILLED',
    payload: photo_json.splice(0, 100),
  }
}

export const FETCH_PHOTOS_REJECTED = "FETCH_PHOTOS_REJECTED";
function receivePhotosError(err) {
  return {
    type: "FETCH_PHOTOS_REJECTED",
    payload: err
  }
}

const fetchPhotos = () => {
  return dispatch => {
    dispatch(requestPhotos());
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(json)))
      .catch(err => dispatch(receivePhotosError(err)))
  }
}

export default fetchPhotos;
