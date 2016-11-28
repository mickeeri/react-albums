// @flow

import { combineReducers } from 'redux'
import albumsReducer from './albumsReducer'
import type { Action } from '../constants/ActionTypes'
import type { AlbumState } from './albumsReducer'

export type State = {
  albums: AlbumState,
  errorMessage: string,
  isFetching: boolean,
}

const errorMessage = (state = null, action: Action) => {
  if (action.type === 'RESET_ERROR_MESSAGE') {
    return null
  } else {
    return action.errorMessage || state
  }
}

const isFetching = (state = false, action: Action) => {
  return action.type === 'FETCHING_DATA'
}

export default combineReducers({
  albums: albumsReducer,
  errorMessage,
  isFetching,
})