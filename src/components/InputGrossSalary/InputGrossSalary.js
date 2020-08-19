import React, { Component } from 'react';
import './InputGrossSalary.css';

export default class InputGrossSalary extends Component {
  handleChangeInput = (event) => {
    var onGrossSalary = event.target.value;
    this.props.onChangeInputSalary(onGrossSalary);
  }

  render() {
    const { value } = this.props;

    return (
      <div className= "grossSalaryContainer">
        <span className= "containerTitle">Salário Bruto: </span>

        <input
        className= "inputGrossSalary"
        value= {value}
        onChange= {this.handleChangeInput}
        type= "number"
        min= "0" >
        </input>
      </div>
    )
  }
}
