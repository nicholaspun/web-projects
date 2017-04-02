// Redux Functions
import { connect } from "react-redux";

// Actions
import fetchPhotos from "../actions/fetchphotos";

// Components
import Main from './main'

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (url) => dispatch(fetchPhotos(url)),
  }
}

// Connects state and dispatch as props to our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
