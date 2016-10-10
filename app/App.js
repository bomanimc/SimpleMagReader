var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
import { hashHistory } from 'react-router'
var routes = require('./config/routes');

// import React from 'react';
// import ReactDOM from 'react-dom';


ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>, 
	document.getElementById('app')
);