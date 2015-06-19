var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
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

var localStream;

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://0.0.0.0:8000/'};
  },
  getInitialState() {
    return {user: null};
  },
  componentDidMount() {
    alert('re');
    this.localVideo();
  },
  localVideo() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
    navigator.getUserMedia({ audio: true, video: true },
      function (stream) {
        localStream = stream;
        document.getElementById('local_video').src = URL.createObjectURL(stream);
      },
      function (error) {
        console.log(error);
      });
  },
  render() {
    return (
      <Paper className='window' zDepth={1} rounded={false}>

        <div className="message">
          <video id="local_video" autoplay></video>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});