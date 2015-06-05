var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, Menu } = mui;

module.exports = React.createClass({
  render() {
    var mi = [
      { payload: '1', text: 'Text Opt-In', toggle: true},
      { payload: '2', text: 'Text Opt-Out', toggle: true, defaultToggled: true},
      { payload: '3', text: 'Voice Opt-Out', toggle: true, disabled: true}
    ];
    return (
      <div className="setting_tab">
        <Menu menuItems={mi} autoWidth={false} zDepth={0}/>
      </div>
    );
  }
});