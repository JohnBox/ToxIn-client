var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var App = require('./App/App');
var StartPage = require('./StartPage/StartPage');
var RegisterPage = require('./RegisterPage/RegisterPage');
var SideBar = require('./SideBar/SideBar');
var MessageBar = require('./MessageBar/MessageBar');

var prefix = '/ToxIn/build/index.html';


var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(Route, {name: "register", path: "register/", handler: RegisterPage})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});

