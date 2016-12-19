import React from 'react';
import classNames from 'classnames/bind';
import styles from './TwoPage.css';

let cx = classNames.bind(styles);

class TwoPage extends React.Component {
	render() {
		return (
			<div className={cx('wrapper')}>
				<img className={cx('page', 'page-left')} src={this.props.assets[0]} />
				<img className={cx('page', 'page-right')} src={this.props.assets[1]} />
			</div>
		);
	}
}

export default TwoPage;
