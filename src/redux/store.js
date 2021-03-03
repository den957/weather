import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import weatherReducer from './weather.reducer'


export const reducers = combineReducers({
   weather: weatherReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store
window.store = store