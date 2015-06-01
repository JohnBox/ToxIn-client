var React = require('react');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  getInitialState: function () {
    return {isOpen: true};
  },
  toggleState: function () {
    this.setState({isOpen: !this.state.isOpen});
    this.props.togglePanel();
  },
  render: function () {
    var label = this.state.isOpen?'<':'>';
    return (
      <div className="appbar_button">
        <RaisedButton onClick={this.toggleState} label={label}/>
      </div>
    );
  }
});