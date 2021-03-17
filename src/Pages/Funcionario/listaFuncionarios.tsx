import React, { Component, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { funcionarioRequestAll, funcionarioRequestByFilter } from '../../store/modules/funcionario/actions'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

import { DataGrid, ColDef, ValueGetterParams,PreferencePanelsValue } from '@material-ui/data-grid';


import { InputAdornment, TableSortLabel } from '@material-ui/core';
import { Search } from '@material-ui/icons'
import './funcionario.css'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '55ch',
            },
        },
    }),
);

const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: ValueGetterParams) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


//const ListaFuncionario: React.FC = () => {
export default function ListaFuncionario() {

    //Executa quando start a pagina
    useEffect(() => {
        setPage(0);
        setRowsPerPage(10);
        getByFilter(0, 10);
    }, []);

    const funcionario = useSelector((state: StoreState) => state.funcionario.dataByFilter);
    const dispatch = useDispatch();
    const totalrow = funcionario == undefined ? 0 : funcionario.totalItens
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const pages = [10, 25, 100]
    const func = []
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        getByFilter(newPage, rowsPerPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        getByFilter(page, +event.target.value);
    };


    function getAll() {
        dispatch(funcionarioRequestAll())
    }

    function getByFilter(nPage: number, nRowsPage: number) {
        dispatch(funcionarioRequestByFilter({
            page: nPage + 1,
            itens: nRowsPage,
            filterType: '',
            filterValue: ''
        }))
    }

    function ver(){
        console.log(funcionario?.listFuncionario)
        
    }
    const classes = useStyles();

    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //     maxColumns: 6,
    //   });

    return (
        <div>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={5} 
                    //checkboxSelection 
                />
                {/* <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination {...data} /> */}
            </div>

            <button onClick={() => ver()}>Teste</button>


            <div className="list-title">
                <strong>Lista Funcionarios</strong>
            </div>

            {/*   <div className="input-container">
                <input id="name" className="input" type="text" pattern=".+" required />
                <label className="label" htmlFor="name">Pesquisar</label>
               
            </div> 
            
            Implementar https://material-ui.com/pt/components/data-grid/filtering/
            
            
            */}

            <Paper className='funcionario_root'>
                <Toolbar>
                    <TextField
                        label="Pesquisar"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                    />
                </Toolbar>
                <TableContainer className='funcionario_container'>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                                <TableCell><TableSortLabel>ID</TableSortLabel></TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>RG</TableCell>
                                <TableCell>CPF</TableCell>
                                <TableCell>Telefone</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {funcionario?.listFuncionario.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        <TableCell key={row.id}>{row.id}</TableCell>
                                        <TableCell>{row.nome}</TableCell>
                                        <TableCell>{row.rg}</TableCell>
                                        <TableCell>{row.cnpj_cpf}</TableCell>
                                        <TableCell>{row.telefone}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>Ativo</TableCell>
                                        <TableCell><button>Editar</button> | <button>Desativar</button></TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={pages}
                    component="div"
                    count={totalrow}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

//export default ListaFuncionario