var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var Cookie = require('js-cookie');
var $ = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, FontIcon } = mui;
var Transitions = mui.Styles.Transitions;
var OutButton = require('./../Button/OutButton');
var ToggleButton = require('./../Button/ToggleButton');
var UserWindow = require('../Window/UserWindow');
var ContactWindow = require('../Window/ContactWindow');
var MessageWindow = require('../Window/MessageWindow');
var RoomWindow = require('../Window/RoomWindow');
var windowTypes = require('../windows');

module.exports = React.createClass({
  render() {
    var window;
    switch (this.props.window) {
      case windowTypes.USER:
        window = <UserWindow close={this.props.closeWindow}/>;
        break;
      case windowTypes.CONTACT:
        window = <ContactWindow close={this.props.closeWindow} contact={this.props.contact}/>;
        break;
      case windowTypes.MESSAGE:
        window = <MessageWindow close={this.props.closeWindow} contact={this.props.contact}/>;
        break;
      case windowTypes.ROOM:
        window = <MessageWindow close={this.props.closeWindow} contacts={this.props.contact}/>;
        break;
      case windowTypes.NONE:
      default:
        window = null;
    }
    return (
      <div className="container">
        <AppBar title=''
                iconElementLeft={<ToggleButton togglePanel={this.props.togglePanel}/>}
                iconElementRight={<OutButton/>}
                zDepth={0}/>
        {window}
      </div>
    );
  }
});
