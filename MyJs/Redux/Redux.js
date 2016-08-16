import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

export default class Redux extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return <Provider store={store}>
        <App />
      </Provider>;
  }
}