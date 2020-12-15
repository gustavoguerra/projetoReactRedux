import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { funcionarioRequestAll, funcionarioRequestByFilter } from '../../store/modules/funcionario/actions'

const ListaFuncionario: React.FC = () => {
    
    const funcionario = useSelector((state: StoreState) => state.funcionario.dataByFilter);

    const dispatch = useDispatch();

    
    function getAll() {
        dispatch(funcionarioRequestAll())
    }

    function getByFilter(){
        dispatch(funcionarioRequestByFilter({
            page: 1,
            itens: 50,
            filterType: '',
            filterValue: ''
        }))
    }


    return (
        <div>
            Lista Funcionarios
            <div>
                <button onClick={() => getAll()}>Get All Funcionaios</button>
            </div>
            <div>
                <button onClick={() => getByFilter()}>Get by Filter</button>
            </div>

            <ul>
                {funcionario?.listFuncionario.map(a => (
                    <div>
                         {a.nome}
                    </div>
                ))}
            </ul>
        </div>
    )

}


export default ListaFuncionario