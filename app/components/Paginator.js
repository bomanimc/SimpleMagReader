import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Paginator.css';
import OnePage from './contentComponents/OnePage';

let cx = classNames.bind(styles);

class Paginator extends React.Component {
	getComponentForType(type, assets) {
		switch(type) {
			case 'one-page':
				return (
						<OnePage assets={assets[0]} />
				);
				break;
			case 'two-page':
				return (
						<div>TWO PAGE</div>
				);
				break;
			default:
				return (<div></div>);
		}	
	}
	render() {
		return (
			<div className={cx('paginator')}>
				
			</div>
		);	
	}
}

export default Paginator;

// if (this.props.pages.length > 0) {
// 			let page = this.props.pages[this.props.pageNumber - 1];

// 			return this.getComponentForType(page.pageType, page.assets);
// 		}
// 		else {
// 			return (<div></div>);
// 		}