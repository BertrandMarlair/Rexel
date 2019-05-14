import { createStore } from "redux";
import pageReducer from "reducers/pageReducer";

const initialState = {
    page: 0
}

function configureStore(state = initialState) {
    return createStore(pageReducer, state);
}

export default configureStore;