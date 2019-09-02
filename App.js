import React from 'react';
import Result from './resultcomponenet';
import Keypad from './keypadComponent';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      result : ''
    } 
  }
  onClick = button =>{
    if(button ==="="){
      this.calculate()
    }else if(button ==="C") {
      this.reset()
    }else if(button ==="CE"){
      this.backspace()
    }else{
      this.setState({
        result : this.state.result + button
      })
    }
  };

  calculate=()=>{
    try{ this.setState({
      result: (eval(this.state.result)||"") + ""
    })}
    catch(e){this.setState({
      result:"error"
    })}
  }
  reset = ()=>{
    this.setState({
      result:''
    })
  }
  backspace = ()=>{
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }

render() { 
    return(
      <div className ="claculator-body">
        <h1> Simple claculator</h1>
        <Result result ={this.state.result}/>
        <Keypad onClick ={this.onClick}/>
      </div>
      )
    }
}

export default App;
