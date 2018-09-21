import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header'

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

// import Grid from '@material-ui/core/Grid';
// import Email from '@material-ui/icons/Email';
// import Lock from '@material-ui/icons/Lock';

// import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Typography from '@material-ui/core/Typography'; 

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPass: false
        }
    }

    toggle() {
        const { showPass } = this.state;

        this.setState({
            showPass: !showPass
        })
    }


    render() {
        const { updateText, showLogin } = this.props;
        const { showPass } = this.state;
        return (

            <div>
 <Header/>
                <div className='mainDiv'>

                    <FormControl className="formDiv">

                        <Typography variant="display2" >
                            Sign Up
                        </Typography>
                        <br />
                        <TextField className="formEle" id="input-with-icon-grid"
                            // placeholder="abc@mail.com"
                            // inputProps={{ maxLength: 17 }}
                            // fullWidth={true}
                            // style={{width:300}}
                            label="Username"
                            type="text"
                            onChange={updateText}
                            name="name"
                            // helperText="Some important text"
                            margin="normal"
                        // required={true} "show * means required"
                        // error={true} "shows like there is error"
                        // multiline={true} "behaves like textarea"
                        />

                        <TextField className="formEle" id="input-with-icon-grid"

                            label="Email"
                            type="email"
                            onChange={updateText}
                            name="userEmail"
                            margin="normal"

                        />

                        <TextField className="formEle" id="input-with-icon-grid"
                            label="Password"
                            type={showPass ? 'text' : 'password'}
                            onChange={updateText}
                            name="userPassword"
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.toggle.bind(this)}
                                        >
                                            {showPass ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <br />
                        <br />

                        <Button className="formEle" variant="contained" color="primary" onClick={showLogin}>
                            Sign up
                </Button>
                        <br /><br />

                        <Typography variant="body2" >
                            Already on QuizCloud?
                </Typography>

                        <Button className="formEle" variant="contained" color="secondary" onClick={showLogin}>
                            sign in
                </Button>

                    </FormControl>

                </div>
            </div>
        );
    }
}

export default Signup;