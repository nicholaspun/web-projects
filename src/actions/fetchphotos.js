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
    photos: photo_json.photos,
    current_page: photo_json.current_page,
    total_pages: photo_json.total_pages
  }
}

export const FETCH_PHOTOS_REJECTED = "FETCH_PHOTOS_REJECTED";
function receivePhotosError(err) {
  return {
    type: "FETCH_PHOTOS_REJECTED",
    payload: err
  }
}

const fetchPhotos = (url) => {
  return dispatch => {
    dispatch(requestPhotos());
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(json)))
      .catch(err => dispatch(receivePhotosError(err)))
  }
}

export default fetchPhotos;
