import React, { useState } from 'react';
import NoteForm from './components/noteForm';
import NoteList from './components/noteList';
import NoteEdit from './components/noteEdit';
import NoteItem from './components/noteItem';
import NoteSearch from './components/noteSearch';
import NoteSort from './components/noteSort';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [sortBy, setSortBy] = useState('');

  // Fonction pour ajouter une nouvelle note
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Fonction pour afficher une note sélectionnée en mode édition
  const viewNote = (note) => {
    setSelectedNote(note);
  };

  // Fonction pour mettre à jour une note existante
  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note === selectedNote ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  // Fonction pour supprimer une note
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((n) => n !== note);
    setNotes(updatedNotes);
  };

  // Fonction pour effectuer la recherche des notes correspondantes au terme de recherche
  const searchNotes = (term) => {
    const results = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(term.toLowerCase()) ||
        note.note.toLowerCase().includes(term.toLowerCase()) ||
        note.comment.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  // Fonction pour trier les notes
  const sortNotes = (sortOption) => {
    let sortedNotes = [...notes];
    switch (sortOption) {
      case 'dateAsc':
        sortedNotes.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'dateDesc':
        sortedNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'noteAsc':
        sortedNotes.sort((a, b) => a.note - b.note);
        break;
      case 'noteDesc':
        sortedNotes.sort((a, b) => b.note - a.note);
        break;
      default:
        break;
    }
    setNotes(sortedNotes);
    setSortBy(sortOption);
  };

  return (
    <>
      <div>
        <h1>Système de gestion de notes</h1>

        <NoteForm addNote={addNote} />
        <div class='mdr'>
        <NoteSearch searchNotes={searchNotes} />
        
        <NoteSort sortNotes={sortNotes} />
        </div>
        
          {selectedNote ? (
            <NoteEdit note={selectedNote} updateNote={updateNote} />
          ) : (
            <NoteList
              notes={searchResults.length > 0 ? searchResults : notes}
              viewNote={viewNote}
            />
          )}
        
        {notes.length > 0 && (
          <div>
            <h2>Liste des notes :</h2>
            {searchResults.length > 0 && (
              <p>Résultats de recherche ({searchResults.length})</p>
            )}
            {notes.map((note, index) => (
              <NoteItem key={index} note={note} deleteNote={deleteNote} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
