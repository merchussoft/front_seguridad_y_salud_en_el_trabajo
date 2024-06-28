import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/Login.css'

export const Login = ({ setUser }) => {

    const [ username, setUsername ] = useState('');  
    const [ password, setPassword ] = useState('');  


    const handleLogin = (e) => {

    }

  return (
    <div className='container'>
        <div className="login-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>SEGURIDAD Y SALUD EN EL TRABAJO​</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label >username</label>
                    <input 
                        type="text"
                        className='form-control'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label >Password</label>
                    <input 
                        type="Password"
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
  )
}