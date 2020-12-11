import { ActionType } from 'typesafe-actions'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import * as actions from './actions'
import api from '../../../Services/api'

export function* singIn({ payload }: ActionType<typeof actions.singInRequest>) {
    try {
        const { username, password } = payload;
        console.log(payload)
        const response = yield call(api.login.post, '/Login/Auth', {
            username, password            
        });       
        yield put(actions.singInSuccess(response.data))
        //yield put(actions.singInSuccess({ token: response.data.token }))
    }
    catch (error) {
        console.log('erro programa',error)
        yield put(actions.singInFailure())
    }
}

export default all([
    takeLatest('@auth/SING_IN_REQUEST',singIn)
])