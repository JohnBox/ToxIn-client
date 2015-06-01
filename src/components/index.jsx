var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, RoutesAction, Link } = Router;
var App = require('./App/App');
var MainPage = require('./MainPage/MainPage');
var LoginPage = require('./Auth/LoginPage');
var RegisterPage = require('./Auth/RegisterPage');

//var prefix = '/ToxIn/build/index.html';
var prefix = '/';
var routes = (
  <Route handler={App} path={prefix}>
    <Route name='register' path='register/' handler={RegisterPage}/>
    <Route name='login' path='login/' handler={LoginPage}/>
    <Route name='main' path='main/' handler={MainPage}/>
    <DefaultRoute handler={LoginPage}/>
  </Route>
);

Router.run(routes, function (Handler, state) {
  React.render(<Handler/>, document.body);
});

