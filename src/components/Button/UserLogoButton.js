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
    return {on: true};
  },
  getStyles() {
    var imgBorder = ['#F33','green'];
    return {
      border: 'solid 2px '+imgBorder[this.state.on+0],
      backgroundColor: this.getTheme().canvasColor
    };
  },
  changeState() {
    this.setState({on: !this.state.on});
  },
  render() {
    var style = this.getStyles();
    return (
      <div className="logo_button">
        <img src="static/go.png" style={style} onClick={this.changeState}/>
      </div>
    );
  }
});