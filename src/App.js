import React, { Component } from 'react';
import QuizList from './screens/QuizList/QuizList'
import QuizInfo from './screens/QuizInfo/QuizInfo'
import StartQuiz from './screens/StartQuiz/StartQuiz'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      quizzes: [
        {
          name: 'AngularJs',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '50', time: '60',
              qArr: [
                {
                  question: "How to create alert box?",
                  option1: "alert='hello world'",
                  option2: "aler('hello world')",
                  option3: "alert.('hello world')",
                  option4: "alert('hello world')",
                  answer: "4"
                },
                {

                  question: "How to initialize variable?",
                  option1: "variable name = 'ali'",
                  option2: "var name = 'ali'",
                  option3: "variable: 'ali'",
                  option4: "variable. 'ali'",
                  answer: "2"
                },
                {

                  question: "How to push value in array?",
                  option1: "arr.push(value)",
                  option2: "arr.push.value",
                  option3: "arr.(value)",
                  option4: "arr.value.push(value)",
                  answer: "1"
                },
                {

                  question: "What is javascript?",
                  option1: "programming language",
                  option2: "scripting language",
                  option3: "coding language",
                  option4: "web language",
                  answer: "2"
                },
              ]
            },
            {
              name: 'Quiz 2', questions: '40', time: '40',
              qArr: [{

                 question : "Which creates random number?",
                 option1 : "Math.floor()",
                 option2 : "Math.ceil()",
                 option3 : "Math.random()",
                 option4 : "Math.high",
                 answer : "3"
              },
              {

                 question : "What does array returns?",
                 option1 : "function",
                 option2 : "object",
                 option3 : "index number",
                 option4 : "data type",
                 answer : "2"
              },
              {

                 question : "Object property name & value are separated by?",
                 option1 : "semicolon ;",
                 option2 : "colon :",
                 option3 : "dot .",
                 option4 : "comma ,",
                 answer : "2"
              },
              {

                 question : "Object properties are separated by?",
                 option1 : "comma ,",
                 option2 : "dot .",
                 option3 : "colon :",
                 option4 : "semicolon ;",
                 answer : "1"
              },
              ]
            },
          ]
        },

        {
          name: 'PWA',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '100', time: '120',
              qArr: [
                {

                   question : "What is the correct syntax for object initialization?",
                   option1 : "var var_name = {property_name:property_value}",
                   option2 : "var var_name = {property_value:property_name}",
                   option3 : "var var_value = {property_name:property_value}",
                   option4 : "object = {property_name:property_value}",
                   answer : "1"
                },
                {

                   question : "DOM stands for?",
                   option1 : "document object modification",
                   option2 : "document observed module",
                   option3 : "document object model",
                   option4 : "document object module",
                   answer : "3"
                },
              ]
            }
          ]
        },
        // {
        //   name: 'React',
        //   subQuiz: [{ name: 'Quiz 1', questions: '30', time: '60' }, { name: 'Quiz 2', questions: '25', time: '50' }]
        // },
        // {
        //   name: 'JavaScript',
        //   subQuiz: [{ name: 'Quiz 1', questions: '30', time: '40' }, { name: 'Quiz 2', questions: '35', time: '60' }]
        // }
      ],


      quizIndex:null,
      subQuizIndex:null,

      qstnNo:0,

    };

    this.joinQuiz = this.joinQuiz.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.showList = this.showList.bind(this);
  }

  joinQuiz(quizIndex) {
    const { quizzes } = this.state;
    this.setState({ 
      quiz: quizzes[quizIndex],
      quizIndex:quizIndex,
    });
  }

  startQuiz(subQuizIndex) {
    const {quizzes,quizIndex,qstnNo} = this.state;
    // console.log(subQuizIndex)
    this.setState({
      started: quizzes[quizIndex].subQuiz[subQuizIndex].qArr[qstnNo],
      subQuizIndex:subQuizIndex
    });
  }

  showList() {
    this.setState({ quiz: null });
  }

  render() {
    const { quizzes, quiz, started, qstnNo } = this.state;

    return (
      <div>
        {!quiz && !started && <QuizList list={quizzes} onPress={this.joinQuiz} />}
        {quiz && !started && <QuizInfo quiz={quiz} onPress={this.startQuiz} onBack={this.showList} />}
        {started && <StartQuiz qArr={started} qstnNo={qstnNo} />}
      </div>
    )
  }

}

export default App;