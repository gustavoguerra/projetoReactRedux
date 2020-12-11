import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { singInRequest } from '../../store/modules/auth/actions'

import { userLogin } from '../../store/modules/auth/types'

import './login.css'

const Login: React.FC = () => {

    const userToken = useSelector((state: StoreState) => state.auth);
    const [items, setItems] = useState<userLogin>(Object);  
   
    const dispatch = useDispatch();

    function login(){  
        dispatch(singInRequest(items))
    }

    return (
        <div className="box-login">
            <div className="input-label">
                <label>Username</label>
                <input type="text" onChange={e => setItems({...items, username: e.target.value})}/>
            </div>          
            <div className="input-label">
                <label htmlFor="">Password</label>
                <input type="password" onChange={e => setItems({...items, password: e.target.value})}/>
            </div>
            <div className="input-label">
                <label htmlFor="">Token:{userToken.token}</label>
            </div>

            <button onClick={() => login()}>Login</button> 
        </div>
    )
}

export default Login

