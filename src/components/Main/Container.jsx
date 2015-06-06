var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var Panel = require('./Panel');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <div className='container' style={this.props.style}>
        <img src="ti.png" alt=""/>
      </div>
    );
  }
});