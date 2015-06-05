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
  getInitialState() {
    return {border: 0};
  },
  getStyles() {
    var imgBorder = ['green', 'yellow', '#F44'];
    return {
      border: 'solid 2px '+imgBorder[this.state.border],
      backgroundColor: this.getTheme().canvasColor
    };
  },
  changeState() {
    this.setState({border: (this.state.border+1)%3});
  },
  render() {
    var style = this.getStyles();
    return (
      <div className="logo_button">
        <img src="go.png" style={style} onClick={this.changeState}/>
      </div>
    );
  }
});