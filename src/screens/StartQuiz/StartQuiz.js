import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()

    this.state = {

      correct: 0,
      percent: null

    }

  }

  // onPress(qstnNo)

  updating(qArr, qstnNo) {
    const { onPress, showResult } = this.props;
    const { correct, percent } = this.state;

    var radio = document.querySelector("input[name='option']:checked");

    if (radio == null) {
      alert('Selection Required');
    }

    else {
      if (qArr[qstnNo].answer.match(radio.value)) {
        // console.log("load**", load)
        // alert();
        console.log("answer**", qArr[qstnNo].answer)

        this.setState({
          correct: correct + 1
        })
      }

      if (qstnNo === qArr.length - 1) {

        this.setState({
          percent: correct * (100 / qArr.length)
        })

        showResult(qArr.length, correct, percent);
      }

      else {
        onPress(qstnNo);
      }

    }



  }

  render() {
    const { qArr, qstnNo } = this.props;
    const { correct } = this.state;
    return (
      <div>

        <h3>{qstnNo + 1}) {qArr[qstnNo].question}</h3>

        <input type="radio" name="option" value="1" />{qArr[qstnNo].option1}<br />
        <input type="radio" name="option" value="2" />{qArr[qstnNo].option2}<br />
        <input type="radio" name="option" value="3" />{qArr[qstnNo].option3}<br />
        <input type="radio" name="option" value="4" />{qArr[qstnNo].option4}<br />

        <button onClick={this.updating.bind(this, qArr, qstnNo)}>Next</button>

        {console.log(correct)}
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
