import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import storage from '@/store/storage'

import rootReducer from '@/redux/reducers'

const persistConfig = {
  key: 'app',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}