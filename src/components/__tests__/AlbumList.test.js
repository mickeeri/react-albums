import React from 'react';
import AlbumList from '../AlbumList'
import { mount } from 'enzyme'
import store from '../../store/mockStore'

it('should render without crashing', () => {
  mount(
    <AlbumList 
      isFetching={false} 
      displayForm={false}
      addAlbum={() => {}}
      toggleForm={() => {}}
      albums={store.getState().albums.ids}
    />
  )
})