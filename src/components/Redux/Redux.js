import {applyMiddleware, combineReducers, createStore} from "redux";
import middleWare from 'redux-thunk'
import ImgsReducer from "./Imgs-reducer";
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
        imgs: ImgsReducer,
        form: formReducer
})

const store = createStore(reducers, applyMiddleware(middleWare))

window.store = store

export default store