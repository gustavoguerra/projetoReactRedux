import { ActionType } from 'typesafe-actions'
import * as actions from './actions';

import { EnderecoViewModel, InformacoesViewModel } from '../../../Model/IComplemento'

export type funcionarioAction = ActionType<typeof actions>

export interface funcionarioViewModel {
    id: number;
    idEndereco: number;
    endereco: EnderecoViewModel;
    idInformacaoAdicional: number;
    dadosPessoais: InformacoesViewModel;
    idArquivo: number;
    paisNascimento: string;
    dataNascimento: string;
    formacao: string;
    curriculoLink: string;
    linkedins: string;
    sexo: string;
    nomeBanco: string;
    agencia: string;
    numeroConta: string;
    ativo: boolean;
}

export interface filter {
    page: number,
    itens:number,
    filterType: string,
    filterValue: string
}

export interface FuncionarioDTO {
    totalItens: number;
    totalPages: number;
    listFuncionario: Funcionario[];
}

export interface Funcionario {
    id: number;
    nome: string;
    rG: string;
    cnpj_cpf: string;
    email: string;
    telefone: string;
}

export enum funcionarioTypes {
    LOAD_REQUEST_BY_FILTER = '@/funcionario/REQUEST_BY_FILTER',
    LOAD_REQUEST_ALL = '@/funcionario/REQUEST_ALL',
    LOAD_SUCCES = '@/funcionario/SUCCES',
    LOAD_SUCCES_BY_FILTER = '@/funcionario/LOAD_SUCCES_BY_FILTER',
    LOAD_FAILURE = '@/funcionario/FAILURE'
}

export interface funcionarioState {
    readonly dataByFilter: FuncionarioDTO | null; 
    readonly data: funcionarioViewModel[];
    readonly loadFuncionarioRequest: boolean;
    readonly error: boolean;
}