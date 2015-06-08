var React = require('react');
var mui = require('material-ui');
var { RaisedButton, Snackbar } = mui;
var StylePropable = mui.Mixins.StylePropable;
var $ = require('jquery');
var Cookie = require('js-cookie');


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
  render() {
    var style = this.getStyles();
    var fullname = Cookie.getJSON('user')[1];
    return (
      <div className="profile_button" style={style} onClick={this.props.onClick}>
        {fullname}
      </div>
    );
  }
});