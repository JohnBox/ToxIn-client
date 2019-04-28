const React = require('react');
const $ = require('jquery');
const mui = require('material-ui');
const { IconButton, SvgIcon, Snackbar } = mui;
const StylePropable = mui.Mixins.StylePropable;

module.exports = React.createClass({
  mixins: [StylePropable],
  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {url: 'http://93.73.179.185:8000/'};
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
  },
  render() {
    const style = this.getStyles();
    const message = ' доданий у контакти';
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