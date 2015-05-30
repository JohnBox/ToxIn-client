var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var App = require('./App/App');
var StartPage = require('./StartPage/StartPage');
var RegisterPage = require('./RegisterPage/RegisterPage');
var SideBar = require('./SideBar/SideBar');
var MessageBar = require('./MessageBar/MessageBar');

var prefix = '/ToxIn/build/index.html';


var routes = (
  <Route handler={App} path="/">
    <Route name="register" path="register/" handler={RegisterPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

