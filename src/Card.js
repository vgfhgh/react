import './App.css'; 
import React, { Component } from 'react'; 
import words from './dummyData'

class App extends Component { 
  
  state = {
    index : 0
  }

  pickRandomNumber = (min, max) => {
     return Math.floor( Math.random() * (max-min+1) ) + min 
    }

  setNumber = () => {
    this.setState({index: this.pickRandomNumber(0,words.length-1)})
  }
  
  // 초기에 웹화면이 렌더링되었을때 타이머를 설정함
  componentDidMount(){
    this.countID = setInterval(
      this.pickRandomNumber,1000
    )
  }
  //사용자가 웹화면을 벗어나면 타이머를 해제함
  componentWillUnmount(){
    clearInterval(this.countID)
  }
  
  render(){
    const { index } =this.state
    const word_picked = words[index]
    console.log(words.length, index)
    const cardStyle = {
      background : 'tan',
      width: '30%',
      margin: '0 auto',
      textAlign:'center',
      padding:'20px',
      color:'white'
    }
    return(
      <div style={cardStyle}>
        <h1 style={{borderBottom: '1px solid lightgrey'}}>Flash Card!</h1>
        <h2>{word_picked.word}</h2>
        <h2>{word_picked.meaning}</h2>
      </div>
    );
  }
}
export default App;

