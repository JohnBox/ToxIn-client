const React = require('react');
const { Link } = require('react-router');
const { RaisedButton, FlatButton } = require('material-ui');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="appbar_button">
        <FlatButton label={this.props.label} onClick={this.props.onClick}/>
      </div>
    );
  }
});