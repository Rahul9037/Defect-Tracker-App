import React , { Component } from 'react';
import './login.styles.css';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username : '',
            password : ''
        }
    }

    componentDidMount(){
        if(sessionStorage.getItem('user') !== null)
        {
            this.props.history.push('/home');
        }
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value })
    }


    onSubmit = () => {
        const { username , password } = this.state;
        if(username === '' || password === '')
        {
            alert("please enter username and password")
        }
        else if(username === 'developer' && password === 'developer')
        {
            sessionStorage.setItem('user' , 'developer');
            this.props.history.push('/home');
        }
        else if(username === 'tester' && password === 'tester')
        {
            sessionStorage.setItem('user' , 'tester');
            this.props.history.push('/home');
        }
        else{
            alert("please enter correct username and password")
        } 
    }

    render() {
        return (
            <div className="container">
                <div className="left-header">
                    Defect Tracker Application
               </div>
                <div className="right-login">
                    <div className="login">
                        <div className="login-header">
                            <h1>LOGIN</h1>
                        </div>
                        <form>
                            <div className="login-body">
                                <div className="body-section">
                                    <label>UserName : </label>
                                    <input type="text" name="username" onChange={this.onChange} required/>
                                </div>
                                <div className="body-section">
                                    <label>Password : </label>
                                    <input type="password" name="password" onChange={this.onChange} required/>
                                </div>
                            </div>
                            <div className="login-button" onClick={this.onSubmit}>
                                Login
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;


