import  {action } from 'typesafe-actions'

import { funcionarioTypes, funcionarioViewModel, filter, FuncionarioDTO } from './types'


export const funcionarioRequestAll = () => action(funcionarioTypes.LOAD_REQUEST_ALL); 

export const funcionarioRequestByFilter = (data: filter) => action(funcionarioTypes.LOAD_REQUEST_BY_FILTER, data)

export const funcionarioSucces = (data: funcionarioViewModel[]) => action(funcionarioTypes.LOAD_SUCCES, data);

export const funcionarioFailure = () => action(funcionarioTypes.LOAD_FAILURE);

export const funcionarioSuccesByFilter = (data: FuncionarioDTO) =>  action(funcionarioTypes.LOAD_SUCCES_BY_FILTER,data)

