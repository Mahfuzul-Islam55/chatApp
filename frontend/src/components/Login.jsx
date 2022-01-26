import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {userLogin} from '../store/actions/authAction';  
import {useDispatch} from 'react-redux';

function Login() {

    const dispatch=useDispatch();

    const [state,setState]=useState({
        email:'',
        password:''
    });

    const inputHandler=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const login=(e)=>{
        e.preventDefault(); 
        dispatch(userLogin(state));
    
        console.log(state);
    }
    return (
       <div className="login">
           <div className="card">
               <div className="card-header">
                   <h3>Login</h3>
               </div>
               <div className="card-body">
                   <form onSubmit={login}>
                   <div className="form-group">
                           <label htmlFor="email" >Email</label>
                           <input onChange={inputHandler} value={state.email}type="email" placeholder="Email" className="form-control" id="email" name="email"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="password" >Password</label>
                           <input onChange={inputHandler} value={state.password} type="password" placeholder="Password" className="form-control" id="password"  name="password"/>
                       </div>
                       <div className="form-group">
                           <input type="submit" value="Login" className='btn'/>
                       </div>
                       <div className="form-group">
                           <span><Link to="/messenger/register">Register Your Account</Link></span>
                       </div>
                   </form>
               </div>
           </div>
       </div>
    )
}

export default Login
