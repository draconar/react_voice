var React = require('react');


var Inquiry = React.createClass({
  getDefaultProps: function(){
    return {
      question : "Fale um dos comandos: consultar ou transferir. "
    }
  },
  render: function(){
    return (<div className="center-block">
      {this.props.question}

    </div>)
  }

});

module.exports = Inquiry;
