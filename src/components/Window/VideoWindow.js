const React = require('react');
const Cookie = require('js-cookie');
const { Route, RouteHandler, Link, Navigation } = require('react-router');
const { ajax } = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
const StylePropable = mui.Mixins.StylePropable;
const SimpleWebRTC = require('simplewebrtc');
const CloseButton = require('../Button/CloseWindow');


let localStream;

module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://127.0.0.1:8000/', contact: null};
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
    if (next.contact !== this.state.contact) {
      this.setState({contact: next.contact});
    } else {

    }
  },
  closeWindow() {
    this.state.rtc.stopLocalVideo();
    this.state.rtc.leaveRoom();
    this.props.closeWindow();
  },
  render() {
    this.state.rtc.joinRoom(this.state.contact);
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <CloseButton onClick={this.closeWindow}/>
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