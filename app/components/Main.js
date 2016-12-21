import React from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../styles/Main.css';
import Paginator from './Paginator';
import ActionBar from './ActionBar';
import ArrowButton from './ArrowButton';

let cx = classNames.bind(styles);

class Main extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
      		pageNumber : 1,
      		pages: [],
      		sectionIndex: 0
	    };
    }
	componentDidMount() {
		let magStructure = './mags/magStructure.json';

		fetch(magStructure).then(
			(response) => response.json()
		).then(
			(data) => {
				this.setState({
					pageNumber: data.sections[this.state.sectionIndex].pageNumber,
					pages: data.sections,
				});
			}
		)
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			pageNumber: this.getCurrentPage(nextProps.location),
		});
	}
	getCurrentPage(location) {
		let page = location.hash.match(/\d+/g);
		return page !== null ? parseInt(page[0]) : 1;
	}
	nextPage() {
		if (this.state.sectionIndex < this.state.pages.length) {
			this.setState({
				sectionIndex: this.state.sectionIndex + 1,
				pageNumber: this.state.pages[this.state.sectionIndex + 1].pageNumber
			}, 
			function() {
				browserHistory.push("/#" + this.state.pageNumber);
			});
		}
	}
	prevPage() {
		if (this.state.sectionIndex > 0) {
			this.setState({
				sectionIndex: this.state.sectionIndex - 1,
				pageNumber: this.state.pages[this.state.sectionIndex - 1].pageNumber
			}, 
			function() {
				browserHistory.push("/#" + this.state.pageNumber);
			});
		}
	}
	setPage(pageNumber) {
		pageNumber = Math.min(Math.max(parseInt(pageNumber), 1), this.state.pages.length);

		this.setState({
			pageNumber: pageNumber
		}, 
		function() {
			browserHistory.push("/#" + this.state.pageNumber);
		});
	}
	getShouldHide(direction) {
		if (direction == -1) {
			return this.state.sectionIndex == 0;
		}
		else {
			return this.state.sectionIndex == this.state.pages.length - 1;
		}
	}
	render() {
		return (
			<div className={cx('main')}>
				<div className={cx('header')}>
					<ActionBar pageNumber={this.state.pageNumber} pagesLength={this.state.pages.length} setPage={this.setPage.bind(this)} />
				</div>
				<div className={cx('content')}>
					<Paginator pages={this.state.pages} sectionIndex={this.state.sectionIndex} />
				</div>
				<ArrowButton changePage={this.prevPage.bind(this)} direction={-1} shouldHide={this.getShouldHide.bind(this)}/>
				<ArrowButton changePage={this.nextPage.bind(this)} direction={1} shouldHide={this.getShouldHide.bind(this)}/>
			</div>
		);
	}
}

export default Main;
