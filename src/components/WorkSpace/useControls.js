import { useState, useEffect } from 'react';

export const useControls = (initialTitle, initialText, selectedNote) => {
  const [title, setTitle] = useState(initialTitle || '');
  const [text, setText] = useState(initialText || '');

  useEffect(() => {
    setTitle(selectedNote?.title || '');
    setText(selectedNote?.text || '');
  }, [selectedNote]);

  const changeHandler = func => {
    return e => func(e.target.value);
  };

  return {
    title,
    text,
    changeTitle: changeHandler(setTitle),
    changeText: changeHandler(setText),
  };
};