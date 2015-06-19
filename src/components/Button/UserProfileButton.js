var React = require('react');
var mui = require('material-ui');
var { RaisedButton, Snackbar } = mui;
var StylePropable = mui.Mixins.StylePropable;
var $ = require('jquery');
var Cookie = require('js-cookie');

var windowTypes = {
  NONE: 0,
  USER: 1,
  CONTACT: 2,
  MESSAGE: 3
};

module.exports = React.createClass({
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
      color: this.getTheme().canvasColor
    };
  },
  onClick() {
    var user = Cookie.getJSON('user');
    this.props.onClick(windowTypes.USER);
  },
  render() {
    var style = this.getStyles();
    var user = Cookie.getJSON('user');
    var full_name = user.first_name +' '+ user.last_name;
    return (
      <div className="profile_button" style={style} onClick={this.onClick}>
        {full_name}
      </div>
    );
  }
});