import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productListReducer,{productDetailsReducer} from './reducers/productReducers'
import { CartReducer } from './reducers/cartReducers';
import Cookie from "js-cookie";
import { userSigninReducer,userRegisterReducer } from './reducers/userReducers'

const cartItems=Cookie.getJSON("cartItems") || [];
const userInfo=Cookie.getJSON("userInfo") || null;

const initialState ={ cart:{cartItems},userSignin: {userInfo} }


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer

})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;