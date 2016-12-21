import React from 'react';
import classNames from 'classnames/bind';
import Assets from '../../public/assets/assets.map.json';
import styles from '../styles/ActionBar.css';

let cx = classNames.bind(styles);

class ActionBar extends React.Component {
	render() {
		let input = <input id="pages-input" min="1" defaultValue={this.props.pageNumber} type="number" max={this.props.pagesLength}/>;
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
	componentDidMount() {
		document.getElementById('pages-input').onkeypress = function(e) {
			if (!e) e = window.event;
			var keyCode = e.keyCode || e.which;
			if (keyCode == '13'){
				this.props.setPage(event.target.value);
				return false;
			}
		}.bind(this);
	}
}

export default ActionBar;