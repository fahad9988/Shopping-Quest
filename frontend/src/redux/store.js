import { reducer as mensReducer } from "./MensWomens/reducer";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    mens:mensReducer,
    
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));