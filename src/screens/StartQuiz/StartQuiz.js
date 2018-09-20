import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()

    this.state = {

      sec: 10,
      min: 0,

      correct: 0,
      scored: false,

    }

    this.quizTimer = this.quizTimer.bind(this);
    this.timer()
  }

  async updating() {
    const { started, qstnNo, onPress } = this.props;
    const { correct } = this.state;

    var radio = document.querySelector("input[name='option']:checked");

    if (radio == null) {
      alert('Selection Required');
    }

    else {
      if ((qstnNo === started.qArr.length - 1) && (started.qArr[qstnNo].answer.match(radio.value))) {

        await this.setState({
          correct: correct + 1,
          min: 0,
          sec: 0
        })

      }
      else
        if ((qstnNo === started.qArr.length - 1) && !(started.qArr[qstnNo].answer.match(radio.value))) {

          await this.setState({
            min: 0,
            sec: 0
          })

        }
        else
          if (!(qstnNo === started.qArr.length - 1) && (started.qArr[qstnNo].answer.match(radio.value))) {

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
    const { started } = this.props;
    const { correct } = this.state;

    await this.setState({
      scored: ((correct) * (100 / started.qArr.length)).toFixed(2),
      date: new Date(),
    })

    this.saveScore();
    // localStorage.setItem("score", JSON.stringify(score))
  }

  saveScore() {
    const { started } = this.props;
    const { scored, date } = this.state;

    started.score = scored;
    started.attemptDate = date.toLocaleDateString();
    started.attemptTime = date.toLocaleTimeString();

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
    const { started, qstnNo, back, quizName, subQuizName, logout } = this.props;
    const { correct, scored, min, sec, date } = this.state;
    return (
      <div className="App">


        {scored !== false ?

          <div>
            <button onClick={() => logout()}>Log-Out</button>
            <h1>{quizName}</h1>
            <h2>{subQuizName}</h2>
            <p>Total Questions: {started.qArr.length}</p>
            <p>Correct: {correct}</p>
            <p>Percentage: {scored} %</p>
            <button onClick={() => back()}>Back</button>
          </div>
          :
          <div>

            <h4>{min}:{sec}</h4>
            <h3>{qstnNo + 1}) {started.qArr[qstnNo].question}</h3>

            <input type="radio" name="option" value="1" />{started.qArr[qstnNo].option1}<br />
            <input type="radio" name="option" value="2" />{started.qArr[qstnNo].option2}<br />
            <input type="radio" name="option" value="3" />{started.qArr[qstnNo].option3}<br />
            <input type="radio" name="option" value="4" />{started.qArr[qstnNo].option4}<br />

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
