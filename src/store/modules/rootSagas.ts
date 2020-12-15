import { all } from 'redux-saga/effects'
import auth from './auth/sagas'
import funcionario from './funcionario/sagas'

export default function* rootSagas(){
    return yield all([auth, funcionario])
}