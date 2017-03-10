import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';


describe('list component', function() {
	it('showing list stuff', function(){
		const DATA = [
  {
    id: 1,
    title: 'LIST 1',
    cards: [
      {id: 3, title: "do this today", date: "3/5"},
      {id: 4, title: "do this tomorrow", date: "3/6"}
    ]
  },
  {
    id: 2,
    title: 'LIST 2',
    cards: [
      {id: 5, title: "do this next week", date: "3/15"},
      {id: 6, title: "do this next month", date: "4/6"},
      {id: 7, title: "do this never", date: "apocalypse"}
    ]
  }
];
	
		const renderer = TestUtils.createRenderer();
	    renderer.render(<List list={DATA[0]} /> );
	    const result = renderer.getRenderOutput();
	    
	    result.props.className.should.eq('card-list');
	    result.props.children[0].should.exist;
	    result.props.children[0].type.should.equal('h2');
	    result.props.children[0].props.className.should.eq('list-title')
	});
});