import React from 'react';
import Card from './card';

export default function List(props) {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(<Card />);
  }
  return (
    <div className="card-list"> 
    	<h2 className="list-title"> {props.title} </h2>	
    	<Card text= "This is card numero uno" />

    	<Card text= "This is card number two" />
    	<Card text= "This is card number three" />
    </div>
  );
}
