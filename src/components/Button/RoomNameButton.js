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
      color: this.getTheme().textColor,
      fontSize: '1.4em',
      padding: '0',
      margin: '0',
      marginTop: '20px'
    };
  },
  render() {
    const style = this.getStyles();
    return (
      <div className="profile_button" style={style}>
        {this.props.title}
      </div>
    );
  }
});