import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()

    this.state = {

      sec: 0,
      min: 4,
      timer:true,

      correct: 0,
      percent: false,


    }

    // this.timer = this.timer.bind(this);
        this.quizTimer = this.quizTimer.bind(this);
  }

  updating(qArr, qstnNo) {
    const { onPress } = this.props;
    const { correct, percent } = this.state;

    var radio = document.querySelector("input[name='option']:checked");

    if (radio == null) {
      alert('Selection Required');
    }

    else {
      if ((qstnNo === qArr.length - 1) && (qArr[qstnNo].answer.match(radio.value))) {

        this.setState({
          correct: correct + 1,
          percent: (correct + 1) * (100 / qArr.length)
        })
      }

      if ((qstnNo === qArr.length - 1) && !(qArr[qstnNo].answer.match(radio.value))) {

        this.setState({
          percent: (correct) * (100 / qArr.length)
        })
      }

      if (!(qstnNo === qArr.length - 1) && (qArr[qstnNo].answer.match(radio.value))) {

        this.setState({
          correct: correct + 1,
        })

        onPress(qstnNo);
      }
      else {
        onPress(qstnNo);
      }
    }
  }

  quizTimer() {
    const { sec, min } = this.state;
    
    this.setState({
      sec: sec-1,
     })

    if ((sec === 0) && (min === 0)) {
      this.setState({
        timer: false,
        sec:0,
        min:0,
       })
    }
    else
    if( (sec <= 0) && !(min === 0) ){

      this.setState({
        sec: 59,
        min: min - 1,
      })
    }

  }

  timer(){  
    // alert("timer");
    this.time = setInterval(this.quizTimer, 1000);
  }

  render() {
    const { qArr, qstnNo } = this.props;
    const { correct, percent, min, sec, timer } = this.state;
    return (
      <div className="App">

        {percent !== false ?

          <div>
            <p>Total Questions: {qArr.length}</p>
            <p>Correct: {correct}</p>
            <p>Percentage: {percent} %</p>
          </div>
          :
          <div>
            {timer === true && this.timer()}
            <h4>{min}:{sec}</h4>
            <h3>{qstnNo + 1}) {qArr[qstnNo].question}</h3>

            <input type="radio" name="option" value="1" />{qArr[qstnNo].option1}<br />
            <input type="radio" name="option" value="2" />{qArr[qstnNo].option2}<br />
            <input type="radio" name="option" value="3" />{qArr[qstnNo].option3}<br />
            <input type="radio" name="option" value="4" />{qArr[qstnNo].option4}<br />

            <button onClick={this.updating.bind(this, qArr, qstnNo)}>Next</button>

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
