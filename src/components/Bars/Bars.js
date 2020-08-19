import React, { Component } from 'react'

export default class Bars extends Component {
  render() {
    const { barsColor, barsWidth } = this.props;

    return (
      <div
      style= {{
        backgroundColor: `${barsColor}`,
        width: `${barsWidth}%`,
        height: "100%"
      }}>
        
      </div>
    )
  }
}
