import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { AuthAction, AuthState } from "./modules/auth/types"
import {funcionarioState} from './modules/funcionario/types'

export interface StoreState {
    auth: AuthState,
    funcionario: funcionarioState
}

export type StoreAction = AuthAction;

export default (reducers: Reducer<StoreState,StoreAction>, middlewares: Middleware[]) =>{

    const enhancer = applyMiddleware(...middlewares);

    // const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION();

    return createStore(reducers, enhancer);
}