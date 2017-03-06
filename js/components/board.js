import React from 'react';
import List from './list';

export default function Board(props) {
  const lists = [];
  for (let i = 0; i < 3; i++) {
    lists.push(<List />)
  }
  return (
    <div className="board">
    	<h1> THE BOARD</h1>
    	<List title="LIST 1" />
    	<List title="LIST 2" />
    	<List title="LIST 3" />
    </div>
  );
}



