const React = require('react');
const { Route, DefaultRoute } = require('react-router');
const App = require('./App/App');
const MainPage = require('./Main/MainPage');
const StartPage = require('./Auth/StartPage');

module.exports = (
  <Route name='app' handler={App} path='/'>
    <Route name='main' path=':username' handler={MainPage}/>
    <Route name='login' path='login/' handler={StartPage}/>
    <DefaultRoute handler={StartPage}/>
  </Route>
);