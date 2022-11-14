import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducer/postReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    post: postReducer
})

const middleware = [thunk]

let initialState = {};

initialState = {
}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;