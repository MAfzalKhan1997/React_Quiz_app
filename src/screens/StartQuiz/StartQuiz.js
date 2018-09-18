import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()

    this.state = {

      sec: 10,
      min: 0,
 
      correct: 0,
      score: false,

    }

    this.quizTimer = this.quizTimer.bind(this);
    this.timer()
  }

  async updating() {
    const { qArr, qstnNo, onPress } = this.props;
    const { correct } = this.state;

    var radio = document.querySelector("input[name='option']:checked");

    if (radio == null) {
      alert('Selection Required');
    }

    else {
      if ((qstnNo === qArr.length - 1) && (qArr[qstnNo].answer.match(radio.value))) {

        await this.setState({
          correct: correct + 1,
        })

        this.scoreCal();

      }

      if ((qstnNo === qArr.length - 1) && !(qArr[qstnNo].answer.match(radio.value))) {

        this.scoreCal();

      }

      if (!(qstnNo === qArr.length - 1) && (qArr[qstnNo].answer.match(radio.value))) {

        await this.setState({
          correct: correct + 1,
        })

        onPress(qstnNo);
      }
      else {
        onPress(qstnNo);
      }
    }
  }

async scoreCal() {
    const { qArr } = this.props;
    const { correct,score } = this.state;

  await this.setState({
      score: ((correct) * (100 / qArr.length)).toFixed(2)
    })

    localStorage.setItem("score", JSON.stringify(score))
  }

  quizTimer() {
    const { sec, min } = this.state;

    if ((sec === 0) && (min === 0)) {

      clearInterval(this.time);
      this.scoreCal();
    }

    else
      if ((sec <= 0) && !(min === 0)) {

        this.setState({
          sec: 59,
          min: min - 1,
        })
      }

      else {
        this.setState({
          sec: sec - 1,
        })
      }

  }

  timer() {
    this.time = setInterval(this.quizTimer, 1000);
  }

  render() {
    const { qArr, qstnNo , back, quizName, subQuizName } = this.props;
    const { correct, score, min, sec } = this.state;
    return (
      <div className="App">

        {score !== false ?

          <div>
            <h1>{quizName}</h1>
            <h2>{subQuizName}</h2>
            <p>Total Questions: {qArr.length}</p>
            <p>Correct: {correct}</p>
            <p>Percentage: {score} %</p>
            <button onClick={() => back() }>Back</button>
          </div>
          :
          <div>
 
            <h4>{min}:{sec}</h4>
            <h3>{qstnNo + 1}) {qArr[qstnNo].question}</h3>

            <input type="radio" name="option" value="1" />{qArr[qstnNo].option1}<br />
            <input type="radio" name="option" value="2" />{qArr[qstnNo].option2}<br />
            <input type="radio" name="option" value="3" />{qArr[qstnNo].option3}<br />
            <input type="radio" name="option" value="4" />{qArr[qstnNo].option4}<br />

            <button onClick={this.updating.bind(this)}>Next</button>

          </div>

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
