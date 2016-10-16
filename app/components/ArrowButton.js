import React from 'react';
import { browserHistory } from 'react-router';
import Assets from '../../public/assets/assets.map.json';

var ArrowButton = React.createClass( {
	render: function() {
		var arrow = (this.props.direction == 1) ? Assets.rightArrow : Assets.leftArrow;
		return (
			<img onClick={this.props.changePage} src={arrow} />
		);
	}
});

module.exports = ArrowButton;