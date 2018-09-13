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
        {name: 'AngularJs', 
        subQuiz: [ {name:'Quiz 1',questions:'50',time:'60'},{name:'Quiz 2',questions:'40',time:'40'} ] 
        },
        {name: 'React', 
        subQuiz: [ {name:'Quiz 1',questions:'30',time:'60'},{name:'Quiz 2',questions:'25',time:'50'} ] 
        },
        {name: 'PWA', 
        subQuiz: [ {name:'Quiz 1',questions:'100',time:'120'} ] 
        },
        {name: 'JavaScript',
        subQuiz: [ {name:'Quiz 1',questions:'30',time:'40'},{name:'Quiz 2',questions:'35',time:'60'} ]
        }
      ]
    };

    this.joinQuiz = this.joinQuiz.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.showList = this.showList.bind(this);
  }

  joinQuiz(index) {
    const {quizzes} = this.state;
    this.setState({quiz: quizzes[index]});
  }

  startQuiz(index){
    const {quizzes} = this.state;
    console.log(index)
    this.setState({started: quizzes[index]});
  }

  showList() {
    this.setState({quiz: null});
  }

  render(){
    const {quizzes, quiz} = this.state;

    return(
      <div>
        {!quiz && !started && <QuizList list={quizzes} onPress={this.joinQuiz}/>}
        {quiz && !started && <QuizInfo quiz={quiz} onPress={this.startQuiz} onBack={this.showList}/>}
        {started && <StartQuiz />}
      </div>
      )
    }
    
}

export default App;