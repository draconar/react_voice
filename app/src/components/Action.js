var React = require('react');


var Action = React.createClass({
  render: function(){
    return (<div className="center-block">
        <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.props.hearWhatWasSaid}>
          <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Play
        </button>
    </div>)
  }

});

module.exports = Action;
