import { useId } from 'react';
import { useState } from 'react';

export const useNotes = initialValue => {

  const [notes, setNotes] = useState(initialValue);
  const noteId = useId();

  const addNote = (title = 'New note', text = '') => { 
    const newNote = {
      id: noteId + notes.length.toString(),
      title: title.trim(),
      text: text.trim(),
      shortcut: text ? (text.substring(0, 15) + '...').trim() : 'Empty...'
    };
    console.log(newNote.id);
    setNotes(prev => [...prev, newNote]);
  };

  const removeNote = () => {};

  const clearNotes = () => {
    setNotes([]);
  };

  return {
    notes,
    addNote,
    removeNote,
    clearNotes
  }

};