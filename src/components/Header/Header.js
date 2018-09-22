import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logout } = this.props;  
    return (
      <div >
        <AppBar position="fixed" color="primary" >
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flexGrow:'1',textAlign:'left'}}>
              QuizCloud
            </Typography>
            { logout? <Button size="small" color="inherit" onClick={() => logout()}>LogOut</Button> : null}
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

export default Header;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
