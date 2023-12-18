import React, { Component } from 'react'
// import './App.css'


class Simple extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         cond: false
      }
    }
    condition = ()=>{
        this.setState({cond : !this.state.cond})
    }
    increment = ()=>{
        if(this.state.cond){
            this.setState({count : this.state.count +1})
        }
    }
    
  render() {
    console.log("This is a Simple Component")
    return (
      <div>
        <h1>Simple component</h1>
        <div className='number'>{this.state.count}</div>
        <button onClick={this.condition}>Set Toggle</button>
        <button onClick={this.increment}>Increment</button>
        
      </div>
    )
  }
}

export default Simple