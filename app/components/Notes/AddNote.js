var React = require('react');

var AddNote = React.createClass({
  // propTypes: {
  //   username: React.PropTypes.string.isRequired,
  //   addNote: React.PropTypes.func.isRequired
  // },
  setRef: function(ref){
    this.note = ref;
  },
  handleSubmit: function(){
    
  },
  render: function (){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef}/>
        <span className='input-group-btn'>
          <button className="btn btn-defaul" type="button" onClick={this.handleSubmit}
        </span>
      </div>
    )
  }
});

module.exports = AddNote;
