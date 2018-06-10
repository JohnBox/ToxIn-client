const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link, Navigation } = Router;
const Cookie = require('js-cookie');
const $ = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, FontIcon } = mui;
const Transitions = mui.Styles.Transitions;
const OutButton = require('./../Button/OutButton');
const ToggleButton = require('./../Button/ToggleButton');
const ProfileWindow = require('../Window/ProfileWindow');
const UserWindow = require('../Window/UserWindow');
const VideoWindow = require('../Window/VideoWindow');
const RoomWindow = require('../Window/RoomWindow');
const AudienceWindow = require('../Window/AudienceWindow');
const windowTypes = require('../windows');

module.exports = React.createClass({
  render() {
    let window;
    switch (this.props.window) {
      case windowTypes.PROFILE:
        window = <ProfileWindow closeWindow={this.props.closeWindow}/>;
        break;
      case windowTypes.USER:
        window = <UserWindow closeWindow={this.props.closeWindow}
                             contact={this.props.contact}/>;
        break;
      case windowTypes.VIDEO:
        window = <VideoWindow closeWindow={this.props.closeWindow}
                              contact={this.props.contact}/>;
        break;
      case windowTypes.ROOM:
        window = <RoomWindow closeWindow={this.props.closeWindow}
                             openWindow={this.props.openWindow}
                             contacts={this.props.contact}/>;
        break;
      case windowTypes.AUDIENCE:
        window = <AudienceWindow closeWindow={this.props.closeWindow}
                                 contacts={this.props.contact}/>;
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
