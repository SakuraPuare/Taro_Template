import { persistStore, persistReducer } from 'redux-persist'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import storage from '@/store/storage'

import rootReducer from '@/redux/reducers'

const persistConfig = {
  key: 'app',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default () => {
  let store = createStore(persistedReducer, enhancer)
  let persistor = persistStore(store)
  return { store, persistor }
}
