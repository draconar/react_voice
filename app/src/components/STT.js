var React = require('react');


var STT = React.createClass({
  render: function(){
    return (<div  className="center-block">{this.props.synthText}</div>);
  }

});

module.exports = STT;
