import React, {Component} from 'react';

import './style.css';

export default class Button extends Component{
  classNamesArray =[
    'border-bottom border-right',
    'border-bottom border-right',
    'border-bottom',
    'border-bottom border-right',
    'border-bottom border-right',
    'border-bottom',
    'border-right',
    'border-right',
    null,
  ];

  render(){
    return(
      <button
        onClick={e => this.props.click && this.props.click(this.props.indice)}
        className={`button ${this.classNamesArray[this.props.indice]}`}
      >{ this.props.value}</button>
    )
  }
}

