var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});

