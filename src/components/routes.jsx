var React = require('react');
var { Route, DefaultRoute } = require('react-router');
var App = require('./App/App');
var MainPage = require('./Main/MainPage');
var StartPage = require('./Auth/StartPage');

//var prefix = '/ToxIn/build/index.html';
var prefix = '/';
var routes = (
  <Route name='app' handler={App} path={prefix}>
    <Route name='main' path=':user' handler={MainPage}/>
    <Route name='login' handler={StartPage}/>
    <DefaultRoute handler={StartPage}/>
  </Route>
);

module.exports = routes;