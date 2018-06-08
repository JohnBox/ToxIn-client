const React = require('react');
const mui = require('material-ui');
const { RaisedButton, Snackbar } = mui;
const StylePropable = mui.Mixins.StylePropable;
const $ = require('jquery');
const Cookie = require('js-cookie');

const windowTypes = {
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
      color: this.getTheme().textColor
    };
  },
  onClick() {
    const user = Cookie.getJSON('user');
    this.props.onClick(windowTypes.USER);
  },
  render() {
    const style = this.getStyles();
    const user = Cookie.getJSON('user');
    const full_name = user.first_name +' '+ user.last_name;
    return (
      <div className="profile_button" style={style} onClick={this.onClick}>
        {full_name}
      </div>
    );
  }
});