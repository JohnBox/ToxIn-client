var React = require('react');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="appbar_button">
        <RaisedButton label={this.props.label} onClick={this.props.onClick}/>
      </div>
    );
  }
});