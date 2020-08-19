import React, { Component } from 'react';
import './InputDiscounts.css';

export default class InputDiscounts extends Component {
  render() {
    const { value, title, percentage, color, marginRight } = this.props;

    return (
      <div className= "discountsContainer" style= {{ marginRight: marginRight}}>
        <span
         className= "discountsTitle"
         style= {{ color: color }}>{title}</span>

         <input
         readOnly
         className= "inputDiscounts"
         style= {{ borderBottomColor: color}}
         value= {`R$ ${value === undefined ? 0 : value} (${percentage === undefined || NaN ? 0 : percentage}%)`}
         type= "text" >
         </input>
        
      </div>
    )
  }
}
