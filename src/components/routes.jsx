var React = require('react');
var { Route, DefaultRoute } = require('react-router');
var App = require('./App/App');
var MainPage = require('./Main/MainPage');
var LoginPage = require('./Auth/LoginPage');
var RegisterPage = require('./Auth/RegisterPage');

//var prefix = '/ToxIn/build/index.html';
var prefix = '/';
var routes = (
  <Route handler={App} path={prefix}>
    <Route name='register' path='register/' handler={RegisterPage}/>
    <Route name='login' path='login/' handler={LoginPage}/>
    <Route name='main' path=':user' handler={MainPage}/>
    <DefaultRoute handler={LoginPage}/>
  </Route>
);

module.exports = routes;