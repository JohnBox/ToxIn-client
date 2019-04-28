const React = require('react');
const Cookie = require('js-cookie');
const { Route, RouteHandler, Link, Navigation } = require('react-router');
const { ajax } = require('jquery');
const mui = require('material-ui');
const { AppBar, Paper, RaisedButton, SvgIcon, TextField, DropDownMenu } = mui;
const StylePropable = mui.Mixins.StylePropable;
const SimpleWebRTC = require('simplewebrtc');
const CloseButton = require('../Button/CloseWindow');


module.exports = React.createClass({
  mixins: [Navigation],
  getDefaultProps() {
    return {url: 'http://93.73.179.185:8000/', data: null};
  },
  getInitialState() {
    return {rtc: new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    }),
    showSelf: Cookie.get('showSelfVideo')?Cookie.get('showSelfVideo') === 'true':true};
  },
  componentWillMount() {
    this.setState({data: this.props.data});
    this.state.rtc.joinRoom(this.props.data.name);
  },
  componentWillReceiveProps(next) {
    if (next.data !== this.state.data) {
      this.setState({data: next.data});
    }
  },
  closeWindow() {
    this.state.rtc.stopLocalVideo();
    this.state.rtc.leaveRoom();
    this.props.closeWindow();
  },
  render() {
    return (
      <Paper className='window' zDepth={1} rounded={false}>
        <CloseButton onClick={this.closeWindow}/>
        <div className="video_room">
          <div id="remotesVideos">
            {this.state.showSelf?<video id="localVideo" muted autoPlay></video>:null}
          </div>
        </div>
      </Paper>
    );
  }
});