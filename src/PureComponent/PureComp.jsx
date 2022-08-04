import React, { Component } from 'react'
import { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    return (
      <h2>PureComp {this.props.name}</h2>
    )
  }
}
