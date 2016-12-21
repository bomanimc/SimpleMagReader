import React from 'react';
import classNames from 'classnames/bind';
import Assets from '../../public/assets/assets.map.json';
import styles from '../styles/ActionBar.css';

let cx = classNames.bind(styles);

class ActionBar extends React.Component {
	handleInput(event) {
		this.props.setPage(event.target.value);
	}
	render() {
		let input = <input onChange={this.handleInput.bind(this)} min="1" value={this.props.pageNumber} type="number" max={this.props.pagesLength}/>;
		let pagesMax = <span id="pages-max">{this.props.pagesLength}</span>;

		return (
			<div className={cx('header')}>
				<div className={cx('title')}>
					<div>{Assets.title}</div>
				</div>
				<div className={cx('pages')}>
					Page {input} / {pagesMax}
				</div>
			</div>
		);
	}
}

export default ActionBar;