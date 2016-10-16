import React from 'react';
import classNames from 'classnames/bind';
import Assets from '../../public/assets/assets.map.json';
import styles from '../styles/arrow.css';

var cx = classNames.bind(styles);

var ArrowButton = React.createClass( {
	render: function() {
		var arrow = (this.props.direction == 1) ? Assets.rightArrow : Assets.leftArrow;
		var arrowClasses = cx({
			arrowLeft: this.props.direction == -1,
			arrowRight: this.props.direction == 1,
			arrow: true
		})
		return (
			<div className={arrowClasses}>
				<img className={cx('arrowIcon')} onClick={this.props.changePage} src={arrow} />
			</div>
		);
	}
});

module.exports = ArrowButton;