import React, { Component } from 'react';
import "./style.css";

import Button from '../button';

const initialState = {
  values: Array(9).fill(null),
  count: 0,
  vencedor: false,
};

export default class Tabuleiro extends Component {

  state = {...initialState};
  formasDeGanho = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

  clickButton(indice) {  
    
    if(this.state.count === 9 || this.state.values[indice] || this.state.vencedor)
      return;

    let newState = {...this.state};
    newState.values[indice] = this.state.count % 2 === 0 ? 'X' : 'O';
    newState.count++;
    this.setState(newState);
    this.verificarVencedor();
  }

  verificarVencedor(){
    for(const forma of this.formasDeGanho){
      const a = this.state.values[forma[0]];
      const b = this.state.values[forma[1]];
      const c = this.state.values[forma[2]];
      if(a && b && c && a === b && b === c){
        alert('Ganhou');
        this.setState({vencedor: true});
        return;
      }
    }
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
