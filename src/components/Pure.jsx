import React, { Component, PureComponent } from 'react'
// import './App.css'

class Pure extends PureComponent{
    constructor(props) {
        super(props)
      
        this.state = {
           number : 0,
           cond: false
        }
      }
      condition = ()=>{
          this.setState({cond : !this.state.cond})
      }
      increament = ()=>{
          if(this.state.cond){
              this.setState({number : this.state.number +1})
          }
      }

  render() {
    console.log("This is a Pure Component")
    return (
      <div>
        <h1>Pure component</h1>
        <div className='number'>{this.state.number}</div>
        <button onClick={this.condition}>Set Toggle</button>
        <button onClick={this.increament}>Increment</button>
      </div>
    )
  }
}

export default Pure