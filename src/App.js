import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Item from "./Item"
import Result from "./Result"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doChange(e){
    this.input = e.target.value
  }

  doSubmit(e){
    this.setState({
      messages: [
        ...this.state.messages, 
        {
          number: this.state.messages.length+1,
          message: this.input
        }
      ],
    })
    e.preventDefault();
  }

render(){

  const option = this.state.messages.map((option) => 
     <Item value={option} />
  )
  

  console.log(option)
  return(
    <div className="app">
      <h1 className="font-weight-bold">Judge</h1><br/>
      <form onSubmit={this.doSubmit}>
        <label className="font-weight-bold">
          選択肢を入力→
          <input type="text" onChange={this.doChange} />
        </label>
        <input className="btn-primary font-weight-bold" type="submit" value="Add"/>
      </form><br/>
      {option}<br/>
      <Result value={this.state.messages} messages={this.state.messages}/>
    </div>
  )
}
}

export default App