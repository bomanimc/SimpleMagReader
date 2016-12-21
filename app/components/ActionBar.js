import React from 'react';
import classNames from 'classnames/bind';
import Assets from '../../public/assets/assets.map.json';
import styles from '../styles/ActionBar.css';

let cx = classNames.bind(styles);

class ActionBar extends React.Component {
	render() {
		return (
			<div className={cx('header')}>
				<div className={cx('title')}>
					<div>{Assets.title}</div>
				</div>
				<div className={cx('page-input')}>
					Page <input min="1" type="number" max="48"/> / <span id="pages-max">48</span>
				</div>
			</div>
		);
	}
}

export default ActionBar;