import React from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../styles/Main.css';
import Paginator from './Paginator';
import ArrowButton from './ArrowButton';

var cx = classNames.bind(styles);

var Main = React.createClass( {
	getInitialState : function() {
	    return {
      		pageNumber : 1,
      		pages: [],
	    };
	},
	componentDidMount: function() {
		var magStructure = './mags/magStructure.json';

		fetch(magStructure).then(
			(response) => response.json()
		).then(
			(data) => {
				this.setState({
					pages: data.pages
				});
			}
		)
	},
	nextPage: function() {
		if (this.state.pageNumber < this.state.pages.length) {
			this.setState({
				pageNumber: this.state.pageNumber + 1
			}, 
			function() {
				browserHistory.push("/#" + this.state.pageNumber);
			});
		}
	},
	prevPage: function() {
		if (this.state.pageNumber > 0) {
			this.setState({
				pageNumber: this.state.pageNumber - 1
			}, 
			function() {
				browserHistory.push("/#" + this.state.pageNumber);
			});
		}
	},
	getShouldHide: function(direction) {
		if (direction == -1) {
			return this.state.pageNumber == 1;
		}
		else {
			return this.state.pageNumber == this.state.pages.length;
		}
	},
	render: function() {
		return (
			<div className={cx('main')}>
				<ArrowButton changePage={this.prevPage} direction={-1} shouldHide={this.getShouldHide}/>
				<Paginator pages={this.state.pages} pageNumber={this.state.pageNumber} />
				<ArrowButton changePage={this.nextPage} direction={1} shouldHide={this.getShouldHide}/>
			</div>
		);
	}
});

module.exports = Main;
