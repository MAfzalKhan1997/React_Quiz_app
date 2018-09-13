import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()
  }

  render(){
    const {qArr,qstnNo} = this.props;
    return(
      <div>
         
          <h3>{qstnNo+1}) {qArr.question}</h3>
          
             <input type="radio" name="option" value="1"/>{qArr.option1}<br/> 
             <input type="radio" name="option" value="2"/>{qArr.option2}<br/>  
             <input type="radio" name="option" value="3"/>{qArr.option3}<br/> 
             <input type="radio" name="option" value="4"/>{qArr.option4} 
 
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
