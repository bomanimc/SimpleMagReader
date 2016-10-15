import React from 'react';
import { browserHistory } from 'react-router';
import Paginator from './Paginator';
import ArrowButton from './ArrowButton';

var Main = React.createClass( {
	getInitialState : function() {
	    return {
      		pageNumber : 1,
      		pages: [],
      		length: 0
	    };
	},
	componentDidMount: function() {
		var magStructure = './mags/magStructure.json';

		fetch(magStructure).then(
			(response) => response.json()
		).then(
			(data) => {
				this.setState({
					pages: data.pages,
					length: data.pages.length
				});
			}
		)
	},
	nextPage: function() {
		this.setState({
			pageNumber: this.state.pageNumber + 1
		}, 
		function() {
			browserHistory.push("/#" + this.state.pageNumber);
		});	
	},
	prevPage: function() {
		this.setState({
			pageNumber: this.state.pageNumber - 1
		}, 
		function() {
			browserHistory.push("/#" + this.state.pageNumber);
		});
	},
	render: function() {
		return (
			<div>
				<ArrowButton changePage={this.prevPage} />
				<ArrowButton changePage={this.nextPage} />
				<Paginator pages={this.state.pages} pageNumber={this.state.pageNumber} />
			</div>
		);
	}
});

module.exports = Main;
