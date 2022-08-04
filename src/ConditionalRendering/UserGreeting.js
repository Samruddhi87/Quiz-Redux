import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
//short circuit
return (this.state.isLoggedIn && <div>welcome @@@@@@@@@@@@</div>)
    //ternery operator
    return(this.state.isLoggedIn ? (<div>welcome uwreteterdgfertet</div>):(<div>welcome 1111</div>))


    //Element Variable
let message

if(this.state.isLoggedIn){
    return(
       message= <div>welcome uwreteter</div>
    )
}

else{
    return(
        message= <div>welcome 231124</div>
     )
}
// if-else 
    if(this.state.isLoggedIn){
        return(
            <div>welcome user</div>
        )
    }
    else{
        return(<div>welcome stranger</div>)
    }
  }
}

export default UserGreeting