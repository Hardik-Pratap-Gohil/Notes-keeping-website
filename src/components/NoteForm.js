import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const NoteForm = ({ currentNote, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: currentNote ? currentNote.id : Date.now(), title, content });
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control-dark"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-control-dark"
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              {currentNote ? 'Update Note' : 'Save Note'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NoteForm;
