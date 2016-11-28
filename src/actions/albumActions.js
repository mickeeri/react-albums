// @flow

import { arrayOfAlbums } from './schemas'
import { API_ROOT, ALBUMS } from '../constants/routes'
import type { Dispatch, ThunkAction } from '../constants/ActionTypes'
import { normalize } from 'normalizr'
import { v4 } from 'uuid'

export const fetchAlbums = () => (dispatch: Dispatch) => {
  dispatch({ type: 'FETCHING_DATA', typeOfData: 'albums' })

  return fetch(`${API_ROOT}${ALBUMS}`).then((response: Object) => {
    if (response.ok) {
      response.json().then((albums) => {
        dispatch({
          type: 'FETCH_ALBUMS_SUCCESS',
          response: normalize(albums, arrayOfAlbums),
        })
      })
    } else {
      dispatch({
        type: 'NETWORK_ERROR',
        errorMessage: response.error,
      })
    }
  })
  .catch(error => {
    // Error with my code.
    dispatch({
      type: 'FETCH_ERROR',
      errorMessage: error.message,
    })
  })
}

export const toggleAddAlbumForm = (): Function => (dispatch, getState) =>  { 
  dispatch({
    type: 'TOGGLE_ADD_ALBUM_FORM',
    display: !getState().albums.displayForm,    
  })
}

export const addAlbum = (props: { title: string }): ThunkAction => (dispatch, getState)  => {
  const newAlbum = { id: v4(), title: props.title }
  
  dispatch({
    type: 'ADD_ALBUM_SUCCESS',
    response: newAlbum,
    successMessage: 'Album har lagts till'
  })
}