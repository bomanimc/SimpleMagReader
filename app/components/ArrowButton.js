import React from 'react';
import { browserHistory } from 'react-router';

var ArrowButton = React.createClass( {
	render: function() {
		return (
			<button onClick={this.props.changePage}>BTN</button>
		);
	}
});

module.exports = ArrowButton;