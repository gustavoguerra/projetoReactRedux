import { ActionType } from 'typesafe-actions'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import * as actions from './actions'
import {AuthAction} from './types'
import api from '../../../Services/api'
import { responsiveFontSizes } from '@material-ui/core'

export function* singIn({ payload }:  ActionType<typeof actions.singInRequest>) {
    try {
        const { username, password } = payload;
        console.log(payload)
        const response = yield call(api.login.post, '/Login/Auth', {
            username, password            
        });       
        localStorage.setItem('TOKEN', 'Bearer ' + response.data.token)
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