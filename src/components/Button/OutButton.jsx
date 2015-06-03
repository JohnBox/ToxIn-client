var React = require('react');
var { Link } = require('react-router');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="appbar_button">
      <Link to='login'>
        <RaisedButton label={this.props.label}/>
      </Link>
      </div>
    );
  }
});