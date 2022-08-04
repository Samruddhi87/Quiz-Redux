import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello@@@@@@@@@'
      }
      this.onclickHandler=this.onclickHandler.bind(this)
    }
    onclickHandler(){
        this.setState({
            message:"hello user"
        })
    }
    anotherClickHandler(){
        this.setState({
            message:"hello hfehfuyeuy"
        })
    }
    clickHandlerEvent=()=>{
        this.setState({
            message:"heyyyy!!!!!!!"
        })
    }
  render() {
    return (
      <div>EventBind 
          <h2>{this.state.message}</h2>
          <button onClick={this.onclickHandler}> click</button>
          <button onClick={()=> this.anotherClickHandler()}>click</button>
          <button onClick={this.clickHandlerEvent}>click</button>
      </div>
      
    )
  }
}
