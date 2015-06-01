var React = require('react');
var Router = require('react-router');
var $__0=        Router,Route=$__0.Route,DefaultRoute=$__0.DefaultRoute,RouteHandler=$__0.RouteHandler,RoutesAction=$__0.RoutesAction,Link=$__0.Link;
var App = require('./App/App');
var MainPage = require('./MainPage/MainPage');
var LoginPage = require('./Auth/LoginPage');
var RegisterPage = require('./Auth/RegisterPage');

//var prefix = '/ToxIn/build/index.html';
var prefix = '/';
var routes = (
  React.createElement(Route, {handler: App, path: prefix}, 
    React.createElement(Route, {name: "register", path: "register/", handler: RegisterPage}), 
    React.createElement(Route, {name: "login", path: "login/", handler: LoginPage}), 
    React.createElement(Route, {name: "main", path: "main/", handler: MainPage}), 
    React.createElement(DefaultRoute, {handler: LoginPage})
  )
);

Router.run(routes, function (Handler, state) {
  React.render(React.createElement(Handler, null), document.body);
});

