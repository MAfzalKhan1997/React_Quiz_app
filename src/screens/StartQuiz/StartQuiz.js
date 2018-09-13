import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()
  }

  render(){
    const {qArr} = this.props;
    return(
      <div>
         
          <p>{qArr.question}</p>
          

        {console.log(qArr)}
         
      </div>
      )
    }
    
}

export default QuizList;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
