var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Cookie = require('js-cookie');
var mui = require('material-ui');
var { AppBar, Paper, Tabs, Tab, SvgIcon, } = mui;
var Transitions = mui.Styles.Transitions;
var UserLogoButton = require('./../Button/UserLogoButton');
var UserProfileButton = require('./../Button/UserProfileButton');
var { HomeTab, SearchTab, FavoriteTab, HistoryTab, StatisticTab, SettingTab } = require('./../Tab/Tab');


var HomeIcon = React.createClass({
  render() {
    //<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
      </SvgIcon>
    );
  }
});
var SearchIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
      </SvgIcon>
    );
  }
});
var FavoriteIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
      </SvgIcon>
    );
  }
});
var HistoryIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M11,7V12.11L15.71,14.9L16.5,13.62L12.5,11.25V7M12.5,2C8.97,2 5.91,3.92 4.27,6.77L2,4.5V11H8.5L5.75,8.25C6.96,5.73 9.5,4 12.5,4A7.5,7.5 0 0,1 20,11.5A7.5,7.5 0 0,1 12.5,19C9.23,19 6.47,16.91 5.44,14H3.34C4.44,18.03 8.11,21 12.5,21C17.74,21 22,16.75 22,11.5A9.5,9.5 0 0,0 12.5,2Z" />
      </SvgIcon>
    );
  }
});
var StatisticIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M3,3H5V11.64L10.78,8.3L14.55,10.5L21,6.75V8.94L14.55,12.67L10.78,10.5L5,13.83V19H21V21H3V3Z" />
      </SvgIcon>
    );
  }
});
var SettingIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
      </SvgIcon>
    );
  }
});




module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <Paper className="panel" zDepth={3} style={this.props.style}>
        <AppBar iconElementLeft={<UserLogoButton/>}
                title={<UserProfileButton onClick={this.props.userInfo}/>}
                zDepth={0} />
        <Tabs initialSelectedIndex={0}>
          <Tab label={<HomeIcon/>}>
            <HomeTab contactInfo={this.props.contactInfo}/>
          </Tab>
          <Tab label={<SearchIcon/>}>
            <SearchTab contactInfo={this.props.contactInfo}/>
          </Tab>
          <Tab label={<FavoriteIcon/>}>
            <FavoriteTab/>
          </Tab>
          <Tab label={<HistoryIcon/>}>
            <HistoryTab/>
          </Tab>
          <Tab label={<SettingIcon/>}>
            <SettingTab theme={this.props.theme}/>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
});
