var React = require('react');
var { RaisedButton } = require('material-ui');

module.exports = React.createClass({
  getInitialState() {
    return {state: 0};
  },
  changeState() {
    this.setState({state: (this.state.state+1)%3});
  },
  render() {
    var style='';
    switch (this.state.state) {
      case 0:
        style = 'solid 2px green';
        break;
      case 1:
        style = 'solid 2px yellow';
        break;
      case 2:
        style = 'solid 2px #f44';
        break;
    }
    return (
      <div className="icon_button">
        <img src="go.png" style={{border: style}} onClick={this.changeState}/>
      </div>
    );
  }
});