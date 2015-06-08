var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, Navigation } = Router;
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField } = mui;
var StylePropable = mui.Mixins.StylePropable;


var CloseButton = React.createClass({
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
    var style = this.getStyles();
    return (
      <div className="close_button" onClick={this.props.onClick}>
        <SvgIcon style={style}>
          <path fill={style.color} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </SvgIcon>
      </div>
    );
  }
});

module.exports = React.createClass({
  render() {
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <img src="static/go.png" alt=""/>
        <div className="info">
          <TextField disabled={true} defaultValue="John Box" floatingLabelText="Імя"/>
          <TextField disabled={true} defaultValue="dd.mm.yy" floatingLabelText="Дата народження"/>

        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});
