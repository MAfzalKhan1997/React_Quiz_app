import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()

    this.state = {

      correct: 0,
      percent: false

    }

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

        console.log("both**", qArr[qstnNo].answer)


        this.setState({
          correct: correct + 1,
          percent: correct * (100 / qArr.length)
        })

      }

      if (!(qstnNo === qArr.length - 1) && (qArr[qstnNo].answer.match(radio.value))) {

        console.log("lengthnot**", qArr[qstnNo].answer)


        this.setState({
          correct: correct + 1, 
        })

      }
      // if (qArr[qstnNo].answer.match(radio.value)) {

      //   console.log("answer**", qArr[qstnNo].answer)

      //   this.setState({
      //     correct: correct + 1
      //   })
      // }


      else {
        onPress(qstnNo);
      }

    }



  }

  render() {
    const { qArr, qstnNo } = this.props;
    const { correct, percent } = this.state;
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
