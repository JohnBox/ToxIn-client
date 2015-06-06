var React = require('react');
var { Navigation } = require('react-router');
var { RaisedButton, SvgIcon, IconButton } = require('material-ui');

module.exports = React.createClass({
  mixins: [Navigation],
  getStyles() {
    return { width: '36px', height: '36px' };
  },
  logOut() {
    this.transitionTo('login');
  },
  render() {
    var style = this.getStyles();
    return (
      <IconButton className='out_button' tooltip='Вийти' onClick={this.logOut}>
        <SvgIcon style={style}>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </SvgIcon>
      </IconButton>
    );
  }
});