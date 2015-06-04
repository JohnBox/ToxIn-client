var React = require('react');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  getInitialState() {
    return {state: 0};
  },
  r() {
    alert('');
  },
  render() {
    return (
      <div className="profile_button" onClick={this.r}>
        <div>{this.props.name}</div>
      </div>
    );
  }
});