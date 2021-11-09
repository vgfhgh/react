import './App.css'; 
import React, { Component } from 'react'; 
//import word from './dummyData'

class App extends Component { 
  
  state = {
    number : 0,
    numbers: ''
  }

  pickRandomNumber = (min, max) => {
     return Math.floor( Math.random() * (max-min+1) ) + min 
    }
  checkDuplication = (numbers, picked) => {
    return numbers.find(num => num === picked)
  }
  showRandomNumber = () => {
    const numbers = []
    let cnt = 0;
    while(numbers.length < 6){
      const picked = this.pickRandomNumber(1,45)
      const isDuplicated = this.checkDuplication(numbers, picked)
      if(isDuplicated){
        console.log('duplicated...', isDuplicated)
        numbers.push(this.pickRandomNumber(1,45))
      }else{
        numbers.push(picked)
      }
      cnt++;
    }
    //const numbers =[0,0,0,0,0,0]
    //const picks = numbers.map(n => this.pickRandomNumber(1,45))
    this.setState({number:this.pickRandomNumber(1,45), numbers:numbers.join(' ')})
  }
  // 초기에 웹화면이 렌더링되었을때 타이머를 설정함
  componentDidMount(){
    this.countID = setInterval(
      this.showRandomNumber,1000
    )
  }
  //사용자가 웹화면을 벗어나면 타이머를 해제함
  componentWillUnmount(){
    clearInterval(this.countID)
  }
  
  render(){
    const {number,numbers} =this.state
    
    return(
      <div className="App">
        <h1>LOTTO!</h1>
        <h2>{number}</h2>
        <h2>{numbers}</h2>
      </div>
    );
  }



}
export default App;

