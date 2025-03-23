import { combineReducers } from 'redux'
import counter from '@/redux/reducers/counter'

const rootReducer = combineReducers({
  counter: counter,
})

export default rootReducer
