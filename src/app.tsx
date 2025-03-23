import React from 'react'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'taro-ui/dist/style/index.scss'

import reducer from '@/redux/reducers'

import './app.scss'
import './app.css'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ),
)

class App extends React.Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
