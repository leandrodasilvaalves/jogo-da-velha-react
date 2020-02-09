import React from 'react';
import './style.css';

export default props =>
  <div>
    <div className="player">
      <span className="player-name">{props.name}</span> : <span className="player-victories">{ props.victories }</span></div>
  </div>
