import { action } from "typesafe-actions";

import { userLogin, AuthTypes } from './types'

export const singInRequest = (data: userLogin) => action(AuthTypes.LOAD_REQUEST,data)

// export function singInRequest({ username, password }: userLogin) {
//     return action(AuthTypes.LOAD_REQUEST, {
//         username,
//         password,
//     })
// }

export const singInSuccess = (data: userLogin) => action(AuthTypes.LOAD_SUCCCES, data)

// export function singInSuccess(data: userLogin) {
//     return action(AuthTypes.LOAD_SUCCCES, data)
// }

// export function singInSuccess({ token }: { token: string }) {
//     return action(AuthTypes.LOAD_SUCCCES, {
//         token
//     })
// }

export function singInFailure() {
    return action(AuthTypes.LOAD_FAILURE)
}
