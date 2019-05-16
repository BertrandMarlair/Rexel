import { createStore, combineReducers } from "redux";
import contextConfig from "reducers/contextConfig";
import { saveState, loadState } from 'utils/load/localStorage'

const persistedState = loadState()

const rootReducer = combineReducers({
    contextConfig
})

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState())
})

function configureStore() {
    return store
}


export default configureStore;