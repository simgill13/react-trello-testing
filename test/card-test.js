import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';




describe('card component', function() {
	it('showing hightlight/data', function(){
		const card = {
			title: 'this is a card',
			date: '3/2/2017'
		};

		const renderer = TestUtils.createRenderer();
	    renderer.render(<Card card={card} /> );
	    const result = renderer.getRenderOutput();
	    result.props.className.should.eq('card ');
	    result.props.children.should.be.a('Array');
	    const cardTitle = result.props.children[0];
	    cardTitle.props.className.should.eq('card-title');
	    cardTitle.props.should.have.property('children');
	    cardTitle.props.children.should.eq('this is a card');

	});
});