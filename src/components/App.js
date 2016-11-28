import React, { PropTypes } from 'react';
import AlbumsContainer from './AlbumsContainer'
import { Provider } from 'react-redux'

const App = ({store}) => (
  <Provider store={store}>
    <AlbumsContainer />
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App;
