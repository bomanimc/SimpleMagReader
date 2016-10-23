import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Paginator.css';
import OnePage from './contentComponents/OnePage';

var cx = classNames.bind(styles);

var Paginator = React.createClass( {
	getComponentForType: function(type, assets) {
		switch(type) {
			case 'one-page':
				return (
					<div className='col-xs-8'>
						<OnePage assets={assets[0]} />
					</div>
				);
				break;
			case 'two-page':
				return (
					<div className='col-xs-8'>
						<div>TWO PAGE</div>
					</div>
				);
				break;
			default:
				<div></div>
		}	
	},
	render: function() {
		if (this.props.pages.length > 0) {
			var page = this.props.pages[this.props.pageNumber - 1];

			console.log(this.props.pageNumber);
			console.log(page);

			return this.getComponentForType(page.pageType, page.assets);
		}
		else {
			return (<div></div>);
		}
	}
});

module.exports = Paginator;
