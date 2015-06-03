var React = require('react');
var { Link } = require('react-router');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  render: function () {
    return (
      <Link to={this.props.link}>
        <div className="appbar_button">
          <RaisedButton label={this.props.label}/>
        </div>
      </Link>
    );
  }
});