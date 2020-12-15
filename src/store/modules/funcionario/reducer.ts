
import { funcionarioTypes, funcionarioAction, funcionarioState, FuncionarioDTO } from './types'

const initialState: funcionarioState = {
    dataByFilter: null,
    data: [],
    loadFuncionarioRequest: false,
    error: false
}

export default function funcionario(state = initialState, actions: funcionarioAction): funcionarioState {
    switch (actions.type) {
        case funcionarioTypes.LOAD_REQUEST_ALL:
            return {
                ...state,
                loadFuncionarioRequest: true,
                error: false
                
            }      
        case funcionarioTypes.LOAD_SUCCES:
            return {
                ...state,
                data: actions.payload,                
                loadFuncionarioRequest: false,                
                error: false
            }
        case funcionarioTypes.LOAD_FAILURE:
            return {
                ...state,
                loadFuncionarioRequest: false,
                error: true
            }
        case funcionarioTypes.LOAD_REQUEST_BY_FILTER:
            return {
                ...state,
                loadFuncionarioRequest: true,
                error:false
            }
        case funcionarioTypes.LOAD_SUCCES_BY_FILTER:
            return {
                ...state,
                dataByFilter: actions.payload,
                loadFuncionarioRequest: false,                
                error: false
            }
        default:
            return {
                ...state
            }
    }
}
