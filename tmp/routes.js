var React = require('react');
var $__0=     require('react-router'),Route=$__0.Route,DefaultRoute=$__0.DefaultRoute;
var App = require('./App/App');
var MainPage = require('./Main/MainPage');
var StartPage = require('./Auth/StartPage');

//var prefix = '/ToxIn/build/index.html';
var prefix = '/';
var routes = (
  React.createElement(Route, {name: "app", handler: App, path: prefix}, 
    React.createElement(Route, {name: "main", path: ":user", handler: MainPage}), 
    React.createElement(Route, {name: "login", handler: StartPage}), 
    React.createElement(DefaultRoute, {handler: StartPage})
  )
);

module.exports = routes;