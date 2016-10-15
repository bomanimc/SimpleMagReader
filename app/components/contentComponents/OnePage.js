import React from 'react';

var OnePage = React.createClass( {
	render: function() {
		return (
			<div>
				<img src={this.props.assets} />
			</div>
		);
	}
});

module.exports = OnePage;
