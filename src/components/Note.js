import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Note = ({ note, onDelete, onEdit }) => {
  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Button variant="primary" className="me-2" onClick={() => onEdit(note)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(note.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Note;
