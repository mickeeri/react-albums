import React from 'react';
import AlbumsContainer from '../AlbumsContainer'
import store from '../../store/mockStore'
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<AlbumsContainer store={store} />)
})

it('shuld display text "Did not find any albums" if albums are empty', () => {
  const wrapper = mount(<AlbumsContainer store={store} />) 
  expect(wrapper.find('p').text()).toEqual('Did not find any albums')
})
