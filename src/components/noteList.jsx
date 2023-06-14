import React from 'react';

function NoteList({ notes, viewNote }) {
  return (
    <div >
      {notes.map((note, index) => (
        <div class='lol' key={index} onClick={() => viewNote(note)}>
          <h3>{note.title}</h3>
          <p>Date de création : {note.date}</p>
          <p>{note.comment.substring(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
