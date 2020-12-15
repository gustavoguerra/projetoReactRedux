import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/dashboard'
import NavBar from './Components/Nav-Bar/navbar'
import Login from './Pages/Login/login'
import EditarFuncionario from './Pages/Funcionario/editarFuncionario'
import ListaFuncionarios from './Pages/Funcionario/listaFuncionarios'

import './CSS/layout.css'

export default function Routes() {
    return (
        <Switch>
            <div className="box-container">
                <div className="nav-bar">
                    <NavBar></NavBar>
                </div>
                <div className="main-page">
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/editarfuncionario" component={EditarFuncionario} />
                    <Route exact path="/listafuncionarios" component={ListaFuncionarios} />
                </div>
            </div>
        </Switch>
    )
}