import { combineReducers } from "redux";
import TogglerReducer from "./support/supportToggler";
import AuthReducer from './authReducers/authReducer.js'
// import ChatRe



const reducers = 
{ 
    TogglerReducer,
    AuthReducer
}

const allReducers = combineReducers(reducers);

export default allReducers;