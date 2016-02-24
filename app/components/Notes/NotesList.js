var React = require('react');

var NotesList = React.createClass({
  render: function (){
    var notes = this.props.notes.map(function(note, index){
      return <li classname="list-group-item" key={index}>{note['.value']}</li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
})
