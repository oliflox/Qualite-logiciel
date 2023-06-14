import React, { useState } from 'react';

function NoteSort({ sortNotes }) {
  const [sortBy, setSortBy] = useState('');

  const handleSort = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    sortNotes(selectedSortBy);
  };

  return (
    <select value={sortBy} onChange={handleSort}>
      <option value="">Trier par</option>
      <option value="dateAsc">Date (Croissant)</option>
      <option value="dateDesc">Date (Décroissant)</option>
      <option value="noteAsc">Note (Croissant)</option>
      <option value="noteDesc">Note (Décroissant)</option>
    </select>
  );
}

export default NoteSort;
