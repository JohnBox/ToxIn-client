var React = require('react');
var { IconButton, SvgIcon } = require('material-ui');

module.exports = React.createClass({
  getInitialState() {
    return {state: true};
  },
  toggleState() {
    this.setState({state: !this.state.state});
    this.props.togglePanel();
  },
  getStyles() {
    return { width: '36px', height: '36px' };
  },
  render: function () {
    var style = this.getStyles(),
        icon;
    if (this.state.state) {
      icon = (<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>);
    } else {
      icon = (<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>);
    }
    return (
      <div className="toggle_button">
        <IconButton onClick={this.toggleState}>
          <SvgIcon style={style}>
            <path d="M0 0h24v24H0z" fill="none"/>
            {icon}
          </SvgIcon>
        </IconButton>
      </div>
    );
  }
});