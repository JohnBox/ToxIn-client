var React = require('react');
var mui = require('material-ui');
var { RaisedButton } = mui;
var StylePropable = mui.Mixins.StylePropable;

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
    return (
      <div className="profile_button" style={style} onClick={this.props.onClick}>
        {this.props.name}
      </div>
    );
  }
});