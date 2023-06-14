import React from 'react';

function NoteItem({ note, deleteNote }) {
  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
      deleteNote(note);
    }
  };

  return (
    <div class='lol'>
      <h3>{note.title}</h3>
      <p>Date de création : {note.date}</p>
      <p>{note.comment.substring(0, 50)}...</p>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default NoteItem;
