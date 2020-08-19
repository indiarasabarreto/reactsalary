import React, { Component } from 'react';
import './InputNetSalary.css';

export default class InputNetSalary extends Component {
  render() {
    const { value, title, percentage } = this.props;

    return (
      <div className= "containerNetSalary">
        <span className= "netSalaryTitle">{title}</span>
        <input 
         readOnly
         className= "inputNetSalary"
         value= {`R$ ${ value === undefined ? 0 : value } (${percentage === undefined || NaN ? 0 : percentage}%)`}
         type= "text" >
        </input>
      </div>
    )
  }
}
