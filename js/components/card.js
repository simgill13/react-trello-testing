import React from 'react';

export default function Card(props) {
  const text = 'This is a Card';
  return (
    <div className="card">
    	<div className="card-text"> {props.text} </div>
    	
    </div>
  );
}
