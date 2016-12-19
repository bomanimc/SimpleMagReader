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
				return (<div></div>);
		}	
	}
	render() {
		if (this.props.pages.length > 0) {
			let page = this.props.pages[this.props.pageNumber - 1];

			return this.getComponentForType(page.pageType, page.assets);
		}
		else {
			return (<div></div>);
		}
	}
}

export default Paginator;
