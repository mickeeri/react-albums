import React from 'react'
import AlertMessage from '../AlertMessage'
import store from '../../store/mockStore'
import { mount } from 'enzyme'

it('renders without crashing', () => {
    mount(<AlertMessage store={store} />)
})

it('should return null if successMessage and errorMessage is null', () => {
  expect(store.getState().errorMessage).toEqual(null)
  expect(store.getState().successMessage).toEqual(null)
  const wrapper = mount(<AlertMessage store={store} />)
  expect(wrapper.html()).toEqual(null)
})


