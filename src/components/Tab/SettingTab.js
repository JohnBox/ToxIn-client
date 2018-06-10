const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link } = Router;
const mui = require('material-ui');
const { AppBar, Paper, Menu } = mui;
const Cookies = require('js-cookie');

module.exports = React.createClass({
  onToggle(e,i) {
    if (i === 0) {
      Cookies.set('darkTheme', Cookies.get('darkTheme') !== 'true');
      this.props.toggleTheme();
    } else {
      Cookies.set('showSelfVideo', e.target.checked);
    }
  },
  render() {
    const settings = [
      { text: 'Тема', toggle: true, checked: this.props.darkTheme},
      { text: 'Показувати своє відео', toggle: true, checked: true},
    ];
    return (
      <div className="setting_tab">
        <Menu menuItems={settings} autoWidth={false} zDepth={0} onToggle={this.onToggle} />
      </div>
    );
  }
});