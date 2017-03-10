import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';


describe('Board component', function() {
	it('showing list stuff', function(){
	
		const renderer = TestUtils.createRenderer();
	    renderer.render(<Board /> );
	    const result = renderer.getRenderOutput();
	    console.log(result.props.children[0].props.children[2]);
      result.props.className.should.eq('board');
	    result.props.children.should.be.a('Array');
      result.props.children[0].should.be.a('object');
      result.props.children[1].should.be.a('object');
      result.props.children[2].should.be.a('object');
      result.props.children[0].props.children.should.eq(' THE BOARD')

	});
});