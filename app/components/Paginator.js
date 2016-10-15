import React from 'react';
import { browserHistory } from 'react-router';
import ArrowButton from './ArrowButton';

var Paginator = React.createClass( {
	getInitialState : function() {
	    return {
      		page : 1,
	    };
	},
	nextPage: function() {
		console.log(this.state.page + 1)
		this.setState({
			page: this.state.page + 1
		}, 
		function() {
			console.log("/#" + this.state.page)
			browserHistory.push("/#" + this.state.page);
		});	
	},
	prevPage: function() {
		console.log(this.state.page - 1)
		this.setState({
			page: this.state.page - 1
		}, 
		function() {
			console.log("/#" + this.state.page)
			browserHistory.push("/#" + this.state.page);
		});
	},
	render: function() {
		return (
			<div>
				<ArrowButton changePage={this.prevPage} />
				<ArrowButton changePage={this.nextPage} />
			</div>
		);
	}
});

module.exports = Paginator;
