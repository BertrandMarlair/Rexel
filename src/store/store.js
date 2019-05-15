import { createStore, combineReducers } from "redux";
import contextConfig from "reducers/contextConfig";

const rootReducer = combineReducers({
    contextConfig
})

function configureStore(state) {
    return createStore(rootReducer, state);
}

export default configureStore;