var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  // propTypes: {
  //   username: React.PropTypes.string.isRequired,
  //   notes: React.PropTypes.array.isRequired,
  //   addNote: React.PropTypes.func.isRequired,
  // },
  render: function(){
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
      </div>
    )
  }
})
// <NotesList notes={this.props.notes} />

module.exports = Notes;
