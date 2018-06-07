const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link } = Router;
const mui = require('material-ui');
const { AppBar, Paper, Menu } = mui;
const Cookies = require('js-cookie');

module.exports = React.createClass({
  onToggle() {
    Cookies.set('darkTheme', Cookies.get('darkTheme') !== 'true');
    this.props.toggleTheme();
  },
  render() {
    const settings = [
      { text: 'Тема', toggle: true }
    ];
    return (
      <div className="setting_tab">
        <Menu menuItems={settings} autoWidth={false} zDepth={0} onToggle={this.onToggle}/>
      </div>
    );
  }
});