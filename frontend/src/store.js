import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productListReducer,{productDetailsReducer} from './reducers/productReducers'
import { CartReducer } from './reducers/cartReducers';
import Cookie from "js-cookie";
import { userSigninReducer } from './reducers/userReducers'

const cartItems=Cookie.getJSON("cartItems") || [];
const initialState ={ cart:{cartItems}}
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer,
    userSignin:userSigninReducer

})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;