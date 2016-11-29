// @flow

import { arrayOfAlbums } from './schemas'
import { API_ROOT, ALBUMS } from '../constants/routes'
import type { Dispatch, ThunkAction, ActionCreator } from '../constants/ActionTypes'
import { normalize } from 'normalizr'
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch';

function fetchAlbumsSuccess(albums) {
  return {
    type: 'FETCH_ALBUMS_SUCCESS',
    response: normalize(albums, arrayOfAlbums),
  }
}

function fetchAlbumsNetworkFailure(errorMessage) {
  return {
    type: 'NETWORK_ERROR',
    errorMessage,
  }
}

function fetchAlbumsException(ex) {
  return {
    type: 'FETCH_ERROR',
    errorMessage: ex || 'An error occured when fetching albums',
  }
}

export const fetchAlbums = (): ThunkAction => (dispatch, getStore) => {
  if (getStore().isFetching) {
    return Promise.resolve()
  }

  dispatch({ type: 'FETCHING_DATA', typeOfData: 'albums' })

  return fetch(`${API_ROOT}${ALBUMS}`)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        dispatch(fetchAlbumsNetworkFailure(json.error))
      } else {
        dispatch(fetchAlbumsSuccess(json))        
      }
    })
    .catch(ex => dispatch(fetchAlbumsException(ex)))
}

export const toggleAddAlbumForm = (display: boolean) => { 
  return {
    type: 'TOGGLE_ADD_ALBUM_FORM',
    display,    
  }
}

export const addAlbum = (props: { title: string }): ThunkAction => (dispatch, getState)  => {
  const newAlbum = { id: v4(), title: props.title }
  
  dispatch({
    type: 'ADD_ALBUM_SUCCESS',
    response: newAlbum,
    successMessage: 'Album har lagts till'
  })
}