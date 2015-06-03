var React = require('react');
var { Link } = require('react-router');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="appbar_button">
      <Link to='login'>
        <i className="material-icons x20">arrow_back</i>
      </Link>
      </div>
    );
  }
});