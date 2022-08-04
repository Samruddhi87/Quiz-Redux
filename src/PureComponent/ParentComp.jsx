import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

 class ParentComp extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       name:"max"
    }
  }
  componentDidMount(){
    setInterval(() => {
        this.setState({
            name:"max"
        })
    },3000);
  }
    render() {
    return (
      <div>ParentComp
<RegularComp name={this.state.name}></RegularComp>
<PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}
export default ParentComp;