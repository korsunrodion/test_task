import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { fetchUsers } from './actions/users'
import './index.css'
import { configureFakeApi } from './fakeAPI'


const store = createStore(rootReducer)

configureFakeApi(global.fetch)
fetchUsers(store.dispatch)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
