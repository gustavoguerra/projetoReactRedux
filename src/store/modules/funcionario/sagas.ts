import { ActionType } from 'typesafe-actions'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import * as actions from './actions'
import axios from '../../../Services/api'
import { funcionarioTypes } from './types'

export function* listaFuncionarios({ }: ActionType<typeof actions.funcionarioRequestAll>) {
    try {
        const response = yield call(axios.login.get, '/Funcionario/getall', {
            headers: {
                'Authorization': localStorage.getItem('TOKEN')
            }
        });
        yield put(actions.funcionarioSucces(response.data))
    }
    catch (error) {
        console.log('erro programa', error)
    }
}

export function* fincionarioByFilter({ payload }: ActionType<typeof actions.funcionarioRequestByFilter>) {
    try {
        const response = yield call(axios.login.post, '/Funcionario/getbyfilter', payload, {
            headers: {
                'Authorization': localStorage.getItem('TOKEN')
            }
        });
        yield put(actions.funcionarioSuccesByFilter(response.data))
    }
    catch (error) {
        console.log(error)
    }
}

export default all([
    takeLatest(funcionarioTypes.LOAD_REQUEST_ALL, listaFuncionarios),
    takeLatest(funcionarioTypes.LOAD_REQUEST_BY_FILTER, fincionarioByFilter)
]);