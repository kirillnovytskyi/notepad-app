import { useEffect } from 'react';
import { useId } from 'react';
import { useState } from 'react';

export const useNotes = initialValue => {

  const [notes, setNotes] = useState(initialValue);
  const [selectedNote, setSelectedNote] = useState(null);
  const noteId = useId();

  useEffect(() => {
    if (notes.length === 0) {
      selectNote(-1);
    }
    // eslint-disable-next-line
  }, [notes]);

  const noteConstructor = (id, title, text) => {
    return {
      id,
      title: title.trim(),
      text: text.trim(),
      shortcut: text ? (text.substring(0, 25) + '...').trim() : 'Empty...'
    }
  };

  const addNote = (title = 'New note', text = '') => { 
    const id = noteId + Math.random().toString();
    const newNote = noteConstructor(id, title, text);
    setNotes(notes => [...notes, newNote]);
  };

  const removeNote = id => {
    if (typeof id !== 'string' || !id) {
      id = selectedNote.id;
    }
    if (id === selectedNote.id) selectNote(-1); 
    setNotes(notes => notes.filter(note => note.id !== id));
  };

  const editNote = (id, values) => {
    setNotes(notes => notes.map(note => {
      if (note.id === id) {
        console.log('Editing ', id);
        const { text, title } = values;
        return noteConstructor(id, title, text);
      } else {
        return note;
      }
    }));
  };

  const selectNote = id => {
    if (id === -1) {
      setSelectedNote(null);
      return;
    } 

    if ((!selectedNote || selectedNote.id !== id)) {
      notes.forEach(note => {
        if (note.id === id) {
          setSelectedNote(note);
        }
      });
    }
  };

  const clearNotes = () => {
    setNotes([]);
  };

  return {
    notes,
    selectedNote,
    addNote,
    removeNote,
    clearNotes,
    editNote,
    selectNote,
  }

};