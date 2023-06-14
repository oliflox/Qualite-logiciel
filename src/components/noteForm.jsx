import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      note,
      comment,
      date: new Date().toLocaleDateString(), // Date de création
    };
    addNote(newNote);
    setTitle('');
    setNote('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Commentaire"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Créer</button>
    </form>
  );
}

export default NoteForm;
