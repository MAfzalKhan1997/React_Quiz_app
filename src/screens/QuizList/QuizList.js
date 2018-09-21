import React, { Component } from 'react';
import Header from '../../components/Header/Header'


class QuizList extends Component {
  constructor() {
    super()
  }

  render() {
    const { list, onPress, logout } = this.props;
    return (
      <div>
        <Header logout={logout} />
        
        <div>
        {/* <button onClick={() => logout()}>Log-Out</button> */}
        <ul>
          {list.map((quiz, index) => {
            return <li>
              {quiz.name}
              <button onClick={() => onPress(index)}>Join</button>
            </li>
          }
          )}

        </ul>
         </div>

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
