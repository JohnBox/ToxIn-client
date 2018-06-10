const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler, Link } = Router;
const Cookie = require('js-cookie');
const mui = require('material-ui');
const { AppBar, Paper, Tabs, Tab, SvgIcon, } = mui;
const Transitions = mui.Styles.Transitions;
const UserProfileButton = require('./../Button/UserProfileButton');
const { HomeTab, SearchTab, FavoriteTab, HistoryTab, StatisticTab, SettingTab } = require('./../Tab/Tab');


const HomeIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
});
const SearchIcon = React.createClass({
  render() {
    return (
      <SvgIcon style={{marginTop: '4px'}}>
        <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
      </SvgIcon>
    );
  }
});
const SettingIcon = React.createClass({
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
        <AppBar showMenuIconButton={false}
                title={<UserProfileButton onClick={this.props.openWindow}/>}
                zDepth={0} />
        <Tabs initialSelectedIndex={0}>
          <Tab label={<HomeIcon/>}>
            <HomeTab
              openWindow={this.props.openWindow}
              rooms={this.props.rooms}
              audiences={this.props.audiences}
              closeWindow={this.props.closeWindow}/>
          </Tab>
          <Tab label={<SearchIcon/>}>
            <SearchTab
              openWindow={this.props.openWindow}
              closeWindow={this.props.closeWindow}/>
          </Tab>
          <Tab label={<SettingIcon/>}>
            <SettingTab toggleTheme={this.props.toggleTheme} darkTheme={this.props.darkTheme}/>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
});

