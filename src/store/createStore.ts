import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthAction, AuthState } from "./modules/auth/types"
import {funcionarioState} from './modules/funcionario/types'

export interface StoreState {
    auth: AuthState,
    funcionario: funcionarioState
}

export type StoreAction = AuthAction;

export default (reducers: Reducer<StoreState,StoreAction>, middlewares: Middleware[]) =>{

    const enhancer = applyMiddleware(...middlewares);

    
    //return createStore(reducers, composeWithDevTools(enhancer));
    return createStore(reducers, enhancer);
}