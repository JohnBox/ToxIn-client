var React = require('react');
var Router = require('react-router');
var $__0=      Router,Route=$__0.Route,RouteHandler=$__0.RouteHandler,Link=$__0.Link;
var mui = require('material-ui');
var $__1=       mui,AppBar=$__1.AppBar,Paper=$__1.Paper,Tabs=$__1.Tabs,Tab=$__1.Tab;
var IconButton = require('./../Button/IconButton');
var HomeTab = require('./../Tab/HomeTab');
var SearchTab = require('./../Tab/SearchTab');
var FavoriteTab = require('./../Tab/FavoriteTab');
var HistoryTab = require('./../Tab/HistoryTab');
var StatisticTab = require('./../Tab/StatisticTab');
var SettingTab = require('./../Tab/SettingTab');

module.exports = React.createClass({displayName: "exports",
  changeTabs:function(i,t) {
    alert(i);
  },
  activeTab:function(t) {
    alert(t);
  },
  render:function() {
    return (
      React.createElement(Paper, {className: "panel", zDepth: 2}, 
        React.createElement(AppBar, {title: "Борис Геннадійович", iconElementLeft: React.createElement(IconButton, null), zDepth: 0}), 
        React.createElement(Tabs, null, 
          React.createElement(Tab, {label: "1"}, 
            React.createElement(HomeTab, null)
          ), 
          React.createElement(Tab, {label: "2"}, 
            React.createElement("h1", null, "Search")
          ), 
          React.createElement(Tab, {label: "3"}, 
            React.createElement("h1", null, "Favorite")
          ), 
          React.createElement(Tab, {label: "4"}
          ), 
          React.createElement(Tab, {label: "5"}
          ), 
          React.createElement(Tab, {label: "6"}
          )
        )
      )
    );
  }
});