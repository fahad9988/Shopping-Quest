import { reducer as mensReducer } from "./MensWomens/reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { saveLaterReducer } from "./SaveLater/savelater.reducer";

import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    mens:mensReducer,
    cart:cartReducer,
    saveLater:saveLaterReducer
});

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));