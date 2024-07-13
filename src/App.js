import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes(prevNotes => {
      const existingNote = prevNotes.find(n => n.id === note.id);
      if (existingNote) {
        return prevNotes.map(n => (n.id === note.id ? note : n));
      }
      return [...prevNotes, note];
    });
    setCurrentNote(null);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const editNote = (note) => {
    setCurrentNote(note);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="container mt-3">
        <NoteForm currentNote={currentNote} onSave={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
      </div>
    </div>
  );
}

export default App;
