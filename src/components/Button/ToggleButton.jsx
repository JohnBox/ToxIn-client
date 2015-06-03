var React = require('react');
var { FloatingActionButton } = require('material-ui');

module.exports = React.createClass({
  getInitialState: function () {
    return {state: true};
  },
  toggleState: function () {
    this.setState({state: !this.state.state});
    this.props.toggle();
  },
  render: function () {
    var label = this.state.state?'<':'>';
    return (
      <div className="toggle_button">
        <i className="material-icons x20">arrow_back</i>
      </div>
    );
  }
});