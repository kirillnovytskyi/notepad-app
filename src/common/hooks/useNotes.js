import { useEffect } from 'react';
import { useId } from 'react';
import { useState } from 'react';
import { DELETE_BUTTON_ID } from '../constants';

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

  const addNote = (title = 'New note', text = '') => { 
    const newNote = {
      id: noteId + Math.random().toString(),
      title: title.trim(),
      text: text.trim(),
      shortcut: text ? (text.substring(0, 15) + '...').trim() : 'Empty...'
    };
    console.log(newNote.id);
    setNotes(prev => [...prev, newNote]);
  };

  const removeNote = id => {
    setNotes(notes => notes.filter(note => note.id !== id));
  };

  const editNote = (id, values) => {
    setNotes(notes => notes.map(note => {
      if (note.id === id) {
        return {...values, id};
      } else {
        return note;
      }
    }));
  };

  const selectNote = (id, targetId) => {
    if (id === -1) {
      setSelectedNote(null);
      return;
    } 

    if ((!selectedNote || selectedNote.id !== id) && targetId !== DELETE_BUTTON_ID) {
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