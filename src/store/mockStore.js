import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { List, Map } from 'immutable'

const middlewares = [thunk]

const mockStore = configureStore(middlewares)
const initalState = {
  albums: {
    ids: List([]),
    byId: Map({}),
    displayForm: false,
  },
  errorMessage: null,
  successMessage: null,
  isFetching: false,
}
const store = mockStore(initalState)

export default store