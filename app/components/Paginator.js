import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/Paginator.css';
import OnePage from './layouts/OnePage/OnePage';
import TwoPage from './layouts/TwoPage/TwoPage';

let cx = classNames.bind(styles);

class Paginator extends React.Component {
	getComponentForType(type, assets) {

		switch(type) {
			case 'one-page':
				return (
						<OnePage assets={assets} />
				);
				break;
			case 'two-page':
				return (
						<TwoPage assets={assets} />
				);
				break;
			default:
				return (<div></div>);
		}	
	}
	render() {
		let section = this.props.pages[this.props.sectionIndex];

		return this.props.pages.length > 0
			?(
				<div className={cx('paginator')}>
					{this.getComponentForType(section.content.pageType, section.content.assets)}
				</div>
			)
			:(
				<div></div>
			)
	}
}

export default Paginator;