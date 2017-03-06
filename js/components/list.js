import React from 'react';
import Card from './card';

export default class List extends React.Component {
  render() {
    const { list } = this.props;
    // { id, title, cards }
    return (
      <div className="card-list">
        <h2 className="list-title">{list.title}</h2>
        {list.cards.map(card => <Card key={card.id} card={card} />)}
      </div>
    );
  }
}
