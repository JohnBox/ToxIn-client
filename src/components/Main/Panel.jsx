var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var { AppBar, Paper, Tabs, Tab } = mui;
var IconButton = require('./../Button/IconButton');
var HomeTab = require('./../Tab/HomeTab');
var SearchTab = require('./../Tab/SearchTab');
var FavoriteTab = require('./../Tab/FavoriteTab');
var HistoryTab = require('./../Tab/HistoryTab');
var StatisticTab = require('./../Tab/StatisticTab');
var SettingTab = require('./../Tab/SettingTab');

module.exports = React.createClass({
  changeTabs(i,t) {
    alert(i);
  },
  activeTab(t) {
    alert(t);
  },
  render() {
    return (
      <Paper className="panel" zDepth={2}>
        <AppBar title='Борис Геннадійович' iconElementLeft={<IconButton/>} zDepth={0}/>
        <Tabs>
          <Tab label='1'>
            <HomeTab/>
          </Tab>
          <Tab label='2'>
            <h1>Search</h1>
          </Tab>
          <Tab label='3'>
            <h1>Favorite</h1>
          </Tab>
          <Tab label='4'>
          </Tab>
          <Tab label='5'>
          </Tab>
          <Tab label='6'>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
});