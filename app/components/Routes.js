import React from 'react';
import Main from '../components/Main';
import {Route, Router, browserHistory} from 'react-router';

class Routes extends React.Component {
	render() {
		return (
			<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
				<Route path="/" component={Main}></Route>
			</Router>
		);
	}
}

export default Routes;