import React from 'react';

export default class Card extends React.Component{
  constructor (props){
    super(props);

    this.state = {
      highlight: false
    }
    this.toggleHighlight = this.toggleHighlight.bind(this);
  }
  toggleHighlight() {
    console.log(this);
    this.setState({
      highlight: !this.state.highlight
    })
  }

  render(){
   
    const card = this.props.card
    //const { card } = this.props
    return (
      <div onClick={this.toggleHighlight} className={`card ${this.state.highlight ? 'highlight' : ''}`}>
        <div className="card-title">
          {card.title}
        </div>
        <div className="card-date">
          {card.date}
        </div>
      </div>
    );
  }
}


// result.props.className === 'card '
// result.props.children.should.be.a('array')
//   .with.lengthOf(2);
// result.props.children[0].className.should.eq('card-title')
// result.props.children[0]['props']['children']
