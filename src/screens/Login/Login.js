import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
 
        const { updateText, validation, showSignup} = this.props;
        return (
            <div>
                <input type="email" onChange={updateText} name="loginEmail" />
                <input type="password" onChange={updateText} name="loginPass" />
                <button onClick={validation}>Login</button>
                <p>Dont have an Account?</p>
                <button onClick={showSignup}>Sign-Up</button>
            </div>
        );
    }
}

export default Login;