var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
var StylePropable = mui.Mixins.StylePropable;
var CloseButton = require('../Button/CloseWindow');


var localStream;

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://91.225.146.97:8000/'};
  },
  render() {
    var that = this;
    var webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    });
    webrtc.on('readyToCall', function () {
      webrtc.joinRoom(that.props.contact);
    });
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <div className="message">
          <video id="localVideo" autoplay></video>
          <div id="remotesVideos"></div>
        </div>
        <CloseButton onClick={this.props.close}/>
      </Paper>
    );
  }
});