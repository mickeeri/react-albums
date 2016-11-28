// @flow

import type { Action } from '../constants/ActionTypes'
import { List, Map } from 'immutable'
import { combineReducers } from 'redux'

export type AlbumState = {
  byId: Object,
  ids: Object,
  displayForm: boolean,
}

const byId = (state = Map({}), action: Action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_SUCCESS':
      return Map(action.response.entities.albums)
    case 'ADD_ALBUM_SUCCESS':
      return state.set(action.response.id.toString(), action.response)
    default:
      return state
  }
}

const ids = (state = List([]), action: Action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_SUCCESS':
      return List(action.response.result)
    case 'ADD_ALBUM_SUCCESS':
      console.log('action response', action.response.id)
      return state.insert(0, action.response.id)    
    default:
      return state
  }
}

const displayForm = (state = false, action: Action) => {
  if (action.type === 'TOGGLE_ADD_ALBUM_FORM') {
    return action.display
  } else if (action.type === 'ADD_ALBUM_SUCCESS') {
    return false
  }

  return state
}

export default combineReducers({
  byId,
  ids,
  displayForm,
})

export const getAlbums = ({ids, byId}: AlbumState) => {
  return List(ids.map(id => byId.get(id.toString())))
}