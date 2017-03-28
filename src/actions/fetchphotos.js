import fetch from 'isomorphic-fetch';

const fetchPhotos = () => {
  return dispatch => {
    dispatch({type: "FETCH_PHOTOS_PENDING"});
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => dispatch({type: "FETCH_PHOTOS_FULFILLED", payload: json.splice(0, 100)}))
      .catch(err => dispatch({type: "FETCH_PHOTOS_REJECTED", payload: err}))
  }
}

export default fetchPhotos;
