import React from 'react';
import { browserHistory } from 'react-router';
import ArrowButton from './ArrowButton';

var Paginator = React.createClass( {
	getInitialState : function() {
	    return {
      		page : 1,
      		length: 0
	    };
	},
	componentDidMount: function() {
		var magStructure = './mags/magStructure.json';

		fetch(magStructure).then(
			(response) => response.json()
		).then(
			(data) => {
				console.log(data);
				this.setState({
					length: data.pages.length
				});
			}
		)
	},
	nextPage: function() {
		this.setState({
			page: this.state.page + 1
		}, 
		function() {
			browserHistory.push("/#" + this.state.page);
		});	
	},
	prevPage: function() {
		this.setState({
			page: this.state.page - 1
		}, 
		function() {
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
