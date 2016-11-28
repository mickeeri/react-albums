import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import store from '../../store/mockStore'

const div = document.createElement('div')
const component = <App store={store} />

it('renders without crashing', () => {
  ReactDOM.render(component, div)
})


