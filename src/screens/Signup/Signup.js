import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const { updateText, showLogin } = this.props;
        return (
            <div>
                Name:<input type="name" onChange={updateText} name="name" /><br />
                Email:<input type="email" onChange={updateText} name="userEmail" /><br />
                Password:<input type="password" onChange={updateText} name="userPassword" /><br />
                <button onClick={showLogin}>SignUp</button>
            </div>
        );
    }
}

export default Signup;