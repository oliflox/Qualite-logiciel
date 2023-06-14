import React, { useState } from 'react';



function NoteEdit({ note, updateNote }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.note);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedNote = {
      ...note,
      title,
      note: content,
    };
    updateNote(updatedNote);
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default NoteEdit;
