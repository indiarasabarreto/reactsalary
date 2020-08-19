import React, { Component } from 'react';
import './InputBases.css';

export default class InputBases extends Component {
  render() {
    const { value, title } = this.props;

    return (
      <div className= "containerBases">
        <span className= "basesContainerTitle">{title}</span>
        <input
        readOnly
        className= "inputBases"
        value= {`R$ ${value === undefined ? 0 : value}`}
        type= "text" >
        </input>
      </div>
    )
  }
}
