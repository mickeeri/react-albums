import { API_ROOT, ALBUMS } from '../../constants/routes'
import * as actions from '../albumActions'
import store from '../../store/mockStore'
import nock from 'nock'
import { normalize } from 'normalizr'
import { arrayOfAlbums } from '../schemas'
import type { Action} from '../../constants/ActionTypes'

describe('toggleAddAlbumForm', () => {
  it('should return the passed along display value', () => {
    const expectedAction: Action = {
      type: 'TOOGLE_ADD_ALBUM_FORM',
      display: true
    }
    expect(actions.toggleAddAlbumForm(true)).toEqual(expectedAction)
  })
})

describe('fetchAlbums', () => {
  afterEach(() => {
    nock.cleanAll()
    store.clearActions()
  })

  it('creates FETCH_ALBUMS_SUCCESS when fetching of albums has been done', () => {
    const responseBody = [
      {id: 1, userId: 1, title: 'Lorem ipsum' },
      {id: 2, userId: 2, title: 'Blabala'}
    ] 
    
    nock(API_ROOT)
      .get(ALBUMS)
      .reply(200, responseBody)
    
    const expectedActions: Array<Action> = [
      {type: 'FETCHING_DATA', typeOfData: 'albums'},
      {type: 'FETCH_ALBUMS_SUCCESS', response: normalize(responseBody, arrayOfAlbums)}
    ]

    return store.dispatch(actions.fetchAlbums())
      .then(() => { expect(store.getActions()).toEqual(expectedActions) })
  })

  it('creates NETWORK_ERROR when 500 error', () => {    
    nock(API_ROOT)
      .get(ALBUMS)
      .reply(500, { error: 'Internal server error'})
    
    const expectedActions: Array<Action> = [
      {type: 'FETCHING_DATA', typeOfData: 'albums'},
      {type: 'NETWORK_ERROR', errorMessage: 'Internal server error'}
    ]

    return store.dispatch(actions.fetchAlbums())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })  
})

describe('addAlbum', () => {
  it('should add new album', () => {
    const albumTitle = 'My new album'
    const action = store.dispatch(actions.addAlbum({title: albumTitle}))
    expect(action.response.title).toEqual(albumTitle)
    expect(action.type).toEqual('ADD_ALBUM_SUCCESS')
  })
})
