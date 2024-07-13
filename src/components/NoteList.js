import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NoteList;
