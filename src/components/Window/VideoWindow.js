var React = require('react');
var Cookie = require('js-cookie');
var { Route, RouteHandler, Link, Navigation } = require('react-router');
var { ajax } = require('jquery');
var mui = require('material-ui');
var { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
var StylePropable = mui.Mixins.StylePropable;
var SimpleWebRTC = require('simplewebrtc');
var CloseButton = require('../Button/CloseWindow');


var localStream;

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://91.225.146.97:8000/', contact: null};
  },
  getInitialState() {
    return {rtc: new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    })};
  },
  componentWillMount() {
    this.setState({contact: this.props.contact})
  },
  componentWillReceiveProps(next) {
    if (m=next.contact != this.state.contact) {
      this.setState({contact: next.contact});
    } else {

    }
  },
  componentWillUpdate() {
    this.state.rtc.leaveRoom();
  },
  render() {
    this.state.rtc.joinRoom(this.state.contact);
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <CloseButton onClick={this.props.close}/>
        <h4>{this.state.contact}</h4>
        <div className="video_room">
          <div id="remotesVideos">
            <video id="localVideo" autoPlay></video>
          </div>
        </div>
      </Paper>
    );
  }
});