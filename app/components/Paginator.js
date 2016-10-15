import React from 'react';
import OnePage from './contentComponents/OnePage';

var Paginator = React.createClass( {
	getComponentForType: function(type, assets) {
		switch(type) {
			case 'one-page':
				return <OnePage assets={assets[0]} />
				break;
			case 'two-page':
				return <div>TWO PAGE</div>
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
