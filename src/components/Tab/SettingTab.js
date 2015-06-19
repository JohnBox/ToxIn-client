var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, Menu } = mui;
var Cookies = require('js-cookie');

module.exports = React.createClass({
  onToggle() {
    alert(Cookies.get('darkTheme'));
    Cookies.set('darkTheme', (!Cookies.get('darkTheme')));
    this.props.toggleTheme();
  },
  render() {
    var settings = [
      { text: 'Тема', toggle: true }
    ];
    return (
      <div className="setting_tab">
        <Menu menuItems={settings} autoWidth={false} zDepth={0} onToggle={this.onToggle}/>
      </div>
    );
  }
});