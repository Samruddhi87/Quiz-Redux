// import React, { Component } from 'react'

// export default class Parent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          parentname:'js'
         
//       }
//       this.greetParent=this.greetParent(this)
//     }
//     greetParent(){
//         alert('hello' +this.state.parentname)
//     }
//   render() {
//     return (
//       <div>
// <button onClick={this.greetParent}>press</button>

//       </div>
//     )
//   }
// }
import React from 'react'
import { useState } from 'react'
export const Parent = () => {

    const [js,setJS]=useState('js')
     function greetParent(){
      alert("hello"+ " " +js)
         
       
     }
  return (
    <div>
        <button onClick={greetParent}>click</button>
    </div>
  )
}
