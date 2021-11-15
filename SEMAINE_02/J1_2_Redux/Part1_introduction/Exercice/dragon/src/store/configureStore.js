import { createStore } from "redux";

import rootReducer from "../reducers/index";

const configureStore = (preloadState = {})=>{

    const store = createStore(rootReducer, preloadState);


    return store;
}

export default configureStore;