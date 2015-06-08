var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var Cookie = require('js-cookie');
var mui = require('material-ui');
var $__1=        mui,AppBar=$__1.AppBar,Paper=$__1.Paper,Tabs=$__1.Tabs,Tab=$__1.Tab,SvgIcon=$__1.SvgIcon;
var Transitions = mui.Styles.Transitions;
var UserLogoButton = require('./../Button/UserLogoButton');
var UserProfileButton = require('./../Button/UserProfileButton');
var $__2=         require('./../Tab/Tab'),HomeTab=$__2.HomeTab,SearchTab=$__2.SearchTab,FavoriteTab=$__2.FavoriteTab,HistoryTab=$__2.HistoryTab,StatisticTab=$__2.StatisticTab,SettingTab=$__2.SettingTab;


var HomeIcon = React.createClass({displayName: "HomeIcon",
  render:function() {
    return (
      React.createElement(SvgIcon, {style: {marginTop: '4px'}}, 
        React.createElement("path", {d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})
      )
    );
  }
});
var SearchIcon = React.createClass({displayName: "SearchIcon",
  render:function() {
    return (
      React.createElement(SvgIcon, {style: {marginTop: '4px'}}, 
        React.createElement("path", {d: "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"})
      )
    );
  }
});
var FavoriteIcon = React.createClass({displayName: "FavoriteIcon",
  render:function() {
    return (
      React.createElement(SvgIcon, {style: {marginTop: '4px'}}, 
        React.createElement("path", {d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"})
      )
    );
  }
});
var HistoryIcon = React.createClass({displayName: "HistoryIcon",
  render:function() {
    return (
      React.createElement(SvgIcon, {style: {marginTop: '4px'}}, 
        React.createElement("path", {d: "M11,7V12.11L15.71,14.9L16.5,13.62L12.5,11.25V7M12.5,2C8.97,2 5.91,3.92 4.27,6.77L2,4.5V11H8.5L5.75,8.25C6.96,5.73 9.5,4 12.5,4A7.5,7.5 0 0,1 20,11.5A7.5,7.5 0 0,1 12.5,19C9.23,19 6.47,16.91 5.44,14H3.34C4.44,18.03 8.11,21 12.5,21C17.74,21 22,16.75 22,11.5A9.5,9.5 0 0,0 12.5,2Z"})
      )
    );
  }
});
var StatisticIcon = React.createClass({displayName: "StatisticIcon",
  render:function() {
    return (
      React.createElement(SvgIcon, {style: {marginTop: '4px'}}, 
        React.createElement("path", {d: "M3,3H5V11.64L10.78,8.3L14.55,10.5L21,6.75V8.94L14.55,12.67L10.78,10.5L5,13.83V19H21V21H3V3Z"})
      )
    );
  }
});
var SettingIcon = React.createClass({displayName: "SettingIcon",
  render:function() {
    return (
      React.createElement(SvgIcon, {style: {marginTop: '4px'}}, 
        React.createElement("path", {d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"})
      )
    );
  }
});




module.exports = React.createClass({displayName: "exports",
  contextTypes: {
    router: React.PropTypes.func
  },
  render:function() {
    return (
      React.createElement(Paper, {className: "panel", zDepth: 3, style: this.props.style}, 
        React.createElement(AppBar, {iconElementLeft: React.createElement(UserLogoButton, null), 
                title: React.createElement(UserProfileButton, {onClick: this.props.userInfo}), 
                zDepth: 0}), 
        React.createElement(Tabs, {initialSelectedIndex: 1}, 
          React.createElement(Tab, {label: React.createElement(HomeIcon, null)}, 
            React.createElement(HomeTab, null)
          ), 
          React.createElement(Tab, {label: React.createElement(SearchIcon, null)}, 
            React.createElement(SearchTab, null)
          ), 
          React.createElement(Tab, {label: React.createElement(FavoriteIcon, null)}, 
            React.createElement(FavoriteTab, null)
          ), 
          React.createElement(Tab, {label: React.createElement(HistoryIcon, null)}, 
            React.createElement(HistoryTab, null)
          ), 
          React.createElement(Tab, {label: React.createElement(SettingIcon, null)}, 
            React.createElement(SettingTab, {theme: this.props.theme})
          )
        )
      )
    );
  }
});
