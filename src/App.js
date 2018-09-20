import React, { Component } from 'react';
import Login from './screens/Login/Login'
import Signup from './screens/Signup/Signup'
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
          name: 'HTML',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '3', time: '60', score : false,
              qArr: [
                {
                  question: "what is use for image insertion",
                  option1: "img",
                  option2: "h1",
                  option3: "none",
                  option4: "body",
                  answer: "1"
                },
                {
                  question: "to underline the text",
                  option1: "u",
                  option2: "underline",
                  option3: "style",
                  option4: "none",
                  answer: "1"
                },
                {

                  question: "HTML stands for?",
                  option1: "HYPER TEXT MARKUP LANGUAGE'",
                  option2: "HTPER TEXT TELESCOPR",
                  option3: "HELP TEXT TERMINAL LANGUAGE",
                  option4: "NONE",
                  answer: "1"
                },

              ]
            },
            {
              name: 'Quiz 2', questions: '3', time: '40', score : false,
              qArr: [
                {
                  question: "html use for",
                  option1: "structure",
                  option2: "styling",
                  option3: "scripting",
                  option4: "none",
                  answer: "1"
                },
                {
                  question: "to underline the text",
                  option1: "u",
                  option2: "underline",
                  option3: "style",
                  option4: "none",
                  answer: "1"
                },
                {

                  question: "HTML stands for?",
                  option1: "HYPER TEXT MARKUP LANGUAGE'",
                  option2: "HTPER TEXT TELESCOPR",
                  option3: "HELP TEXT TERMINAL LANGUAGE",
                  option4: "NONE",
                  answer: "1"
                }
              ]
            },
          ]
        },
        {
          name: 'CSS',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '6', time: '60', score : false,
              qArr: [
                {
                  question: "Css stands for?",
                  option1: "cascading style sheet'",
                  option2: "cascade sheet style",
                  option3: "color style sheet",
                  option4: "contrast style sheet",
                  answer: "1"
                },
                {
                  question: "to change the color we use",
                  option1: "color:",
                  option2: "setColor:",
                  option3: "color-style",
                  option4: "change-color",
                  answer: "1"
                },
                {
                  question: "how to link css",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },
                {
                  question: "to change the color we use",
                  option1: "color:",
                  option2: "setColor:",
                  option3: "color-style",
                  option4: "change-color",
                  answer: "1"
                },
                {
                  question: "how to link css",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },
                {
                  question: "how to link css",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },

              ]
            },
          ]
        },
        {
          name: 'JavaScript',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '4', time: '60', score : false,
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
              name: 'Quiz 2', questions: '6', time: '40', score : false,
              qArr: [
                {

                  question: "Which creates random number?",
                  option1: "Math.floor()",
                  option2: "Math.ceil()",
                  option3: "Math.random()",
                  option4: "Math.high",
                  answer: "3"
                },
                {

                  question: "What does array returns?",
                  option1: "function",
                  option2: "object",
                  option3: "index number",
                  option4: "data type",
                  answer: "2"
                },
                {

                  question: "Object property name & value are separated by?",
                  option1: "semicolon ;",
                  option2: "colon :",
                  option3: "dot .",
                  option4: "comma ,",
                  answer: "2"
                },
                {

                  question: "Object properties are separated by?",
                  option1: "comma ,",
                  option2: "dot .",
                  option3: "colon :",
                  option4: "semicolon ;",
                  answer: "1"
                },
                {

                  question: "What is the correct syntax for object initialization?",
                  option1: "var var_name = {property_name:property_value}",
                  option2: "var var_name = {property_value:property_name}",
                  option3: "var var_value = {property_name:property_value}",
                  option4: "object = {property_name:property_value}",
                  answer: "1"
                },
                {

                  question: "DOM stands for?",
                  option1: "document object modification",
                  option2: "document observed module",
                  option3: "document object model",
                  option4: "document object module",
                  answer: "3"
                },
              ]
            },
          ]
        },
  
      ],


      quizIndex: null,
      subQuizIndex: null,

      qstnNo: 0,

      validFlag: false,
      userFlag: false,
 
      userName: '',
      userEmail: '',
      userPass: '',
      loginEmail: '',
      loginPass: '',

      user: localStorage.getItem("user"),

    };

    // this.userAvailable = this.userAvailable.bind(this)

    this.updateText = this.updateText.bind(this)
    this.showLogin = this.showLogin.bind(this)
    this.checkValidation = this.checkValidation.bind(this)

    this.joinQuiz = this.joinQuiz.bind(this);
    this.showList = this.showList.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.nextQstn = this.nextQstn.bind(this);
    this.back = this.back.bind(this);

    this.logout = this.logout.bind(this);
  }

  async updateText(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;

    if (name.match('name')) {
      await this.setState({
        userName: value
      })
      localStorage.setItem('userName', this.state.userName) 
    }
    else if (name.match('userEmail')) {
      await this.setState({
        userEmail: value
      })
      localStorage.setItem('userEmail', this.state.userEmail)
    }
    else if (name.match('userPassword')) {
      await this.setState({
        userPass: value
      })
      localStorage.setItem('userPass', this.state.userPass)
    }
    else if (name.match('loginEmail')) {
    await this.setState({
        loginEmail: value
      })
    }
    else if (name.match('loginPass')) {
    await this.setState({
        loginPass: value
      })
    }
  }

  showLogin() {
    this.setState({
      userFlag: true
    })
  }

 
  async checkValidation() {
    const { loginEmail, loginPass } = this.state
    if ((loginEmail.match(localStorage.getItem('userEmail'))) && (loginPass.match(localStorage.getItem('userPass')))) {
      await this.setState({
        validFlag: true,
        user:true,
      })
      localStorage.setItem('user', true) 
    }
    console.log("Email is Valid :", this.state.validFlag)
  }


async logout() {
await  this.setState({
    // quizIndex: null,
    // subQuizIndex: null,
    user:false,
    userFlag: false,
    validFlag: false,
    loginEmail:'',
    loginPass:'' ,
    quiz:null,
    started:null, 
    qstnNo: 0, 
  })
  localStorage.setItem('user', false) 
}

  joinQuiz(quizIndex) {
    const { quizzes } = this.state;
    this.setState({
      quiz: quizzes[quizIndex],
      quizIndex: quizIndex,
      quizName: quizzes[quizIndex].name,
    });
  }

  showList() {
    this.setState({ quiz: null });
  }

  startQuiz(subQuizIndex) {
    const { quizzes, quizIndex } = this.state; 

    this.setState({
      started: quizzes[quizIndex].subQuiz[subQuizIndex] ,
      subQuizIndex: subQuizIndex,
      subQuizName: quizzes[quizIndex].subQuiz[subQuizIndex].name,
    });
  }

  nextQstn(nextQstnNo) { 

    this.setState({
      qstnNo: nextQstnNo + 1
    });
  }

  back() {
    this.setState({ 
      started: null,
      qstnNo:0, 
    });
  }

// async  userAvailable(){

// await  this.setState({ 
//       userFlag: true,
//       validFlag:true, 
//     });
//     alert()
//   }

  render() {
    const { userFlag, validFlag, quizzes, quiz, started, qstnNo, quizName, subQuizName, user } = this.state;
    // const user = localStorage.getItem("user") ;
    // console.log(user)
    return (
      <div>
        {console.log(user)}
        {/* {console.log(userFlag)} */}
        {/* {console.log(validFlag)} */}
        {/* {this.userAvailable()} */}
        {(user === 'false' || user === null) && !userFlag && <Signup updateText={this.updateText} showLogin={this.showLogin} />}
        {(user === 'false' || user === null) && (userFlag && !validFlag) && <Login validation={this.checkValidation} updateText={this.updateText} />}
        {(user === 'true'  || (userFlag && validFlag)) && (!quiz && !started) && <QuizList list={quizzes} onPress={this.joinQuiz} logout={this.logout} />}
        {(user === 'true'  || (userFlag && validFlag)) && (quiz && !started) && <QuizInfo quiz={quiz} onPress={this.startQuiz} onBack={this.showList} logout={this.logout} />}
        {(user === 'true'  || (userFlag && validFlag)) && started && <StartQuiz quizName={quizName} subQuizName={subQuizName} started={started} qstnNo={qstnNo} onPress={this.nextQstn} back={this.back} logout={this.logout}/>}
      </div>
    )
  }

}

export default App;