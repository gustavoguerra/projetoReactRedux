import { ActionType } from 'typesafe-actions'
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface userLogin {
    username: string,
    password:string,
    token: string | null
}


export enum AuthTypes{
    LOAD_REQUEST = '@auth/SING_IN_REQUEST',
    LOAD_SUCCCES = '@auth/SING_IN_SUCCESS',
    LOAD_FAILURE = '@auth/SING_IN_FAILURE'
}

export interface AuthState {
    readonly loadingSingInRequest: boolean;
    readonly isSingnedIn: boolean;
    readonly error: boolean;
    readonly token: string | null;
}