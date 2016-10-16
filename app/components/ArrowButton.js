import React from 'react';
import { browserHistory } from 'react-router';
import Assets from '../../public/assets/assets.map.json';
import styles from '../styles/arrow.css';

var ArrowButton = React.createClass( {
	render: function() {
		var arrow = (this.props.direction == 1) ? Assets.rightArrow : Assets.leftArrow;
		return (
			<div className={styles.arrow, styles.arrowLeft}>
				<img className={styles.arrowIcon} onClick={this.props.changePage} src={arrow} />
			</div>
		);
	}
});

module.exports = ArrowButton;