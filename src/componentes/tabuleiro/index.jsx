import React, { Component } from 'react';
import "./style.css";

import Button from '../button';

const initialState = {
  values: Array(9).fill(null),
  count: 0,
};

export default class Tabuleiro extends Component {

  state = {...initialState};

  clickButton(indice) {  
    
    if(this.state.count === 9 || this.state.values[indice])
      return;

    let newState = {...this.state};
    newState.values[indice] = this.state.count % 2 === 0 ? 'X' : 'O';
    newState.count++;
    this.setState(newState);
  }

  render() {
    const onClick = indice => this.clickButton(indice);
    return (  
      <div className="tabuleiro">
        {
          this.state.values.map((item, index) =>(
            <Button key={index} click={onClick} indice={index} value={item}/>
          ))
        }
      </div> 
    )
  }
}
