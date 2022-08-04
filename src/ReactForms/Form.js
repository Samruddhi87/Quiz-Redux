import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:''
      }
    }
    usernameHandler=(event)=>{
        this.setState({
        username:event.target.value
        })
    }

  render() {
    return (
      <div>
        <label> Username:</label>
        <input type='text'
        value={this.state.username}
        onChange={this.usernameHandler}
        />
        <button >submit</button>
      </div>
    )
  }
}

export default Form