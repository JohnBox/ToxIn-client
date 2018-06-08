var React = require('react');
var $ = require('jquery');
var mui = require('material-ui');
var { IconButton, SvgIcon, Snackbar } = mui;
var StylePropable = mui.Mixins.StylePropable;

module.exports = React.createClass({
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {url: 'http://192.168.31.128:8000/'};
  },
  getTheme() {
    return this.context.muiTheme.palette;
  },
  getStyles: function() {
    return {
      width: '24px',
      height: '24px',
      float: 'right',
      marginTop: '14px',
      marginBottom: '-14px',
      color: this.getTheme().textColor
    };
  },
  onSnackBar() {
    this.refs.snack.show();
    setTimeout(()=>{this.refs.snack.dismiss()}, 4000);
    var user = this.context.router.getCurrentParams().user;
    $.ajax({
      url: this.props.url + 'create-contact/',
      method: 'POST',
      data: {user: user, contact: this.props.user[0]}
    });
  },
  render() {
    var style = this.getStyles();
    var message = this.props.user[1] + ' доданий у контакти';
    return (
      <span>
      <span className='add_contact'>
      <SvgIcon style={style} onClick={this.onSnackBar}>
        <path fill={style.color} d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'/>
      </SvgIcon>
      </span>
        <Snackbar ref='snack' message={message}/>
      </span>
    );
  }
});