var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, Menu } = mui;

module.exports = React.createClass({
  onToggle(e, i, t) {
    this.props.theme();
  },
  render() {
    var mi = [
      { payload: '1', text: 'Тема', toggle: true}
    ];
    return (
      <div className="setting_tab">
        <Menu menuItems={mi} autoWidth={false} zDepth={0} onToggle={this.onToggle}/>
      </div>
    );
  }
});