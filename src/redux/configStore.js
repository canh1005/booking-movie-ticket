import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./modules/LoginReducer/reducer";
import { RegisterReducer } from "./modules/RegisterReducer/reducer";
import { ProfileReducer } from "./modules/ProfileReducer/reducer";
import { UserEditReducer } from "./modules/UserEditReducer/reducer";

const rootReducer = combineReducers({
    loginReducer,
    RegisterReducer,
    ProfileReducer,
    UserEditReducer,
});
//Redux THUNK
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

