import React, { Component } from 'react'
export class Slider extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.sliderName}</p>
        <input
          className={this.props.className}
          sliderName={this.props.sliderName}
          type="range"
          min="0"
          max={this.props.max}
          value={this.props.value}
        />
      </div>
    )
  }
}
