import React from "react";
import "./NoteItem.css";

function NoteItem({note}) {
  return (
    <div>
      <div id="individual-note">
        <p id="note-content">
          {note.content}
        </p>
        <div id="date-time-container"><p id="date-time">{note.date} &#x25cf; &nbsp;{note.time}</p></div>
        
      </div>
    </div>
  );
}

export default NoteItem;
