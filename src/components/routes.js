var React = require('react');
var $__0=     require('react-router'),Route=$__0.Route,DefaultRoute=$__0.DefaultRoute;
var App = require('./App/App');
var MainPage = require('./Main/MainPage');
var LoginPage = require('./Auth/LoginPage');
var RegisterPage = require('./Auth/RegisterPage');

//var prefix = '/ToxIn/build/index.html';
var prefix = '/';
var routes = (
  React.createElement(Route, {handler: App, path: prefix}, 
    React.createElement(Route, {name: "register", path: "register/", handler: RegisterPage}), 
    React.createElement(Route, {name: "login", path: "login/", handler: LoginPage}), 
    React.createElement(Route, {name: "main", path: ":user", handler: MainPage}), 
    React.createElement(DefaultRoute, {handler: LoginPage})
  )
);

module.exports = routes;