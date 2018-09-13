import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()
  }

  render() {
    const { qArr, qstnNo, onPress } = this.props;
    return (
      <div>

        <h3>{qstnNo + 1}) {qArr[qstnNo].question}</h3>

        <input type="radio" name="option" value="1" />{qArr[qstnNo].option1}<br />
        <input type="radio" name="option" value="2" />{qArr[qstnNo].option2}<br />
        <input type="radio" name="option" value="3" />{qArr[qstnNo].option3}<br />
        <input type="radio" name="option" value="4" />{qArr[qstnNo].option4}<br />

        {qstnNo === qArr.length - 1 ?
          <button onClick={() => onPress()}>End Quiz</button>
          :
          <button onClick={() => onPress(qstnNo)}>Next</button>
        }

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
