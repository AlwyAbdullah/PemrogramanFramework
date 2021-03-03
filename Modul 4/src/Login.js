import React from 'react';
import './login.css'

class Login extends React.Component {
    render(){
        return(
            <div style={{marginTop:'40px'}}>
                <h2 className="text-center">Form Login</h2>
                <div className="align-center padding-color">
                    <h1 className="text-center"><b>Tugas Pertemuan Ketiga</b></h1>
                    <div>
                        <p className="inline-block">Username</p>
                        <input type="text" className="text" placeholder="Masukkan Username"></input>
                    </div>
                    <div>
                        <p className="inline-block">Password</p>
                        <input type="password" className="text" placeholder="Masukkan Password"></input>
                    </div>
                    <input type="button" className="btn-login" value="Login"></input>
                    <div className="checkbox">
                        <input type="checkbox"></input>
                        <p className="inline-block">Remember me</p>
                        <br/>
                        <input type="button" className="btn-cancel" value="Cancel"></input>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Login;