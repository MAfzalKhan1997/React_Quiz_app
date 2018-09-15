import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const { updateText, validation} = this.props;
        return (
            <div>
                <input type="email" onChange={updateText} name="loginEmail" />
                <input type="password" onChange={updateText} name="loginPass" />
                <button onClick={validation}>Login</button>
            </div>
        );
    }
}

export default Login;