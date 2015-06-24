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
var VideoWindow = require('../Window/VideoWindow');
var RoomWindow = require('../Window/RoomWindow');
var AudienceWindow = require('../Window/AudienceWindow');
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
      case windowTypes.VIDEO:
        window = <VideoWindow close={this.props.closeWindow} contact={this.props.contact}/>;
        break;
      case windowTypes.ROOM:
        window = <RoomWindow close={this.props.closeWindow} set={this.props.setWindow} contacts={this.props.contact}/>;
        break;
      case windowTypes.AUDIENCE:
        window = <AudienceWindow close={this.props.closeWindow} contacts={this.props.contact}/>;
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
