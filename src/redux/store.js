import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import weatherReducer from './weather.reducer'
import { reducer as formReducer } from 'redux-form'


export const reducers = combineReducers({
   weather: weatherReducer,
   form: formReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store
window.store = store