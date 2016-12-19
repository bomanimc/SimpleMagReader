import React from 'react';
import classNames from 'classnames/bind';
import styles from './OnePage.css';

let cx = classNames.bind(styles);

class OnePage extends React.Component {
	render() {
		return (
			<div className={cx('wrapper')}>
				<img className={cx('page')} src={this.props.assets[0]} />
			</div>
		);
	}
}

export default OnePage;
