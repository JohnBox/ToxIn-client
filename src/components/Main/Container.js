const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link, Navigation } = Router;
const Cookie = require('js-cookie');
const $ = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, FontIcon } = mui;
const Transitions = mui.Styles.Transitions;
const StylePropable = mui.Mixins.StylePropable;
const OutButton = require('./../Button/OutButton');
const RoomNameButton = require('./../Button/RoomNameButton');
const ToggleButton = require('./../Button/ToggleButton');
const ProfileWindow = require('../Window/ProfileWindow');
const UserWindow = require('../Window/UserWindow');
const ContactWindow = require('../Window/ContactWindow');
const VideoWindow = require('../Window/VideoWindow');
const RoomWindow = require('../Window/RoomWindow');
const AudienceWindow = require('../Window/AudienceWindow');
const windowTypes = require('../windows');

module.exports = React.createClass({
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },
  getTheme() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      userSelect: 'none',
      color: this.getTheme().textColor
    };
  },
  render() {
    let window;
    switch (this.props.window) {
      case windowTypes.PROFILE:
        window = <ProfileWindow closeWindow={this.props.closeWindow}/>;
        break;
      case windowTypes.USER:
        window = <UserWindow closeWindow={this.props.closeWindow}
                             user={this.props.data}/>;
        break;
      case windowTypes.CONTACT:
        window = <ContactWindow closeWindow={this.props.closeWindow}
                             contact={this.props.data}/>;
        break;
      case windowTypes.VIDEO:
        window = <VideoWindow closeWindow={this.props.closeWindow}
                              data={this.props.data}/>;
        break;
      case windowTypes.ROOM:
        window = <RoomWindow closeWindow={this.props.closeWindow}
                             openWindow={this.props.openWindow}
                             contacts={this.props.data}/>;
        break;
      case windowTypes.AUDIENCE:
        window = <AudienceWindow closeWindow={this.props.closeWindow}
                                 contacts={this.props.data}/>;
        break;
      case windowTypes.NONE:
      default:
        window = null;
    }
    const style = this.getStyles();
    let title = this.props.data?this.props.data.name:'';
    return (
      <div className="container">
        <AppBar title={<RoomNameButton title={title}/>}
                iconElementLeft={<ToggleButton togglePanel={this.props.togglePanel}/>}
                iconElementRight={<OutButton/>}
                zDepth={0}/>
        {window}
      </div>
    );
  }
});
