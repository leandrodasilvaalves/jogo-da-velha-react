import React, { Component } from 'react';
import "./style.css";

import Button from '../button';
import Player from '../player';

const initialState = {
  values: Array(9).fill(null),
  count: 0,
  vencedor: false,
  players: [
    {
      nome: 'Jogador X',
      vitorias: 0
    },
    {
      nome: 'Jogador O',
      vitorias: 0
    },
  ]
};

export default class Tabuleiro extends Component {

  state = {...initialState};
  formasDeGanho = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  clickButton(indice) {

    if (this.state.count === 9 || this.state.values[indice] || this.state.vencedor)
      return;

    let newState = { ...this.state };
    newState.values[indice] = this.state.count % 2 === 0 ? 'X' : 'O';
    newState.count++;
    this.setState(newState);
    this.verificarVencedor();
    
  }

  verificarVencedor() {
    for (const forma of this.formasDeGanho) {
      const [f1, f2, f3] = forma;
      const [v1, v2, v3] = [this.state.values[f1], this.state.values[f2], this.state.values[f3]];
      if (v1 && v2 && v3 && v1 === v2 && v2 === v3) {
        this.setState({ vencedor: true });
        this.atualizarPlacar();
        return;
      }
    }
  }

  atualizarPlacar() {
    const indiceNome = this.state.count % 2 === 0 ? 0 : 1;
    let jogadorVencendor = this.state.players[indiceNome];
    jogadorVencendor.vitorias++;
    this.setState([...this.state.players, jogadorVencendor]);
    alert(`O jogador "${jogadorVencendor.nome}" venceu a partida`);    
  }

  render() {
    const onClick = indice => this.clickButton(indice);
    const [player1, player2] = this.state.players;
    return (
      <div>
        <Player name={player1.nome} victories={player1.vitorias} />
        <Player name={player2.nome} victories={player2.vitorias} />
        <div className="tabuleiro">
          {
            this.state.values.map((item, index) => (
              <Button key={index} click={onClick} indice={index} value={item} />
            ))
          }
        </div>
      </div>
    )
  }
}
