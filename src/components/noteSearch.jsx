import React, { useState } from 'react';

function NoteSearch({ searchNotes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchNotes(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default NoteSearch;
