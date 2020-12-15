import { combineReducers } from 'redux'
import { StoreState } from '../createStore'

import authReducer from './auth/reducer'
import funcionarioReducer from './funcionario/reducer'

export default combineReducers<StoreState>({
     auth: authReducer,
     funcionario: funcionarioReducer
})
