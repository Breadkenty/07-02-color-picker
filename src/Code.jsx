import React, { Component } from 'react'
export class Code extends Component {
  render() {
    return (
      <p>
        <span>{this.props.cssPropertyName}:</span>
        <span>{this.props.cssPropertyValue}</span>
      </p>
    )
  }
}
