import React, { Component } from 'react';

class QuizInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { quiz, onBack, onPress, logout } = this.props;
    return (
      <div>
        <button onClick={() => logout() }>Log-Out</button>
        {console.log(quiz)}
        <h1>{quiz.name}</h1>
        <ul>
          {quiz.subQuiz.map((subQuiz, index) => {
            return <li>
              {<h3>{subQuiz.name}</h3>}
              {subQuiz.score ? <p>Percentage: {subQuiz.score} %<br/>Attempted Date: {subQuiz.attemptDate}
              <br/>Attempted Time: {subQuiz.attemptTime}</p>
              : 
              <div>
              <p>Total Questions: {subQuiz.questions}</p>
              <p>Total Time: {subQuiz.time}</p>
              <button onClick={() => onPress(index)}>Start Quiz</button>
              
              </div>
            }
            </li>
          })}
        </ul>
        <button onClick={onBack}>Back</button>
      </div>
    )
  }

}

export default QuizInfo;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
