var React = require('react');
var Inquiry = require('./Inquiry.js');
var STT =  require('./STT.js');
var Action =  require('./Action.js');
var Annyang = require('../speech/Annyang.js');


var Holder = React.createClass({
  getInitialState: function() {
    return {
      synthText: ''
    }
  }
  , componentDidMount: function() {
      that = this;
      Annyang.init(that);

  }
  , hearWhatWasSaid : function(term) {
      console.log(term);
       this.setState({
           synthText: term
         });

  }
  , render: function(){
      return (<div className="row">
      <Inquiry />
      <STT synthText={this.state.synthText}/>
      <Action hearWhatWasSaid={this.hearWhatWasSaid}/>
    </div>)
  }

});


module.exports = Holder;
