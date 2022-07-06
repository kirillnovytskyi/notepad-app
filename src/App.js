import './app-styles/app.css';

import { createContext } from 'react';
import { useNotes } from './common/hooks/useNotes';

import Sidebar from './components/Sidebar/Sidebar';
import WorkSpace from './components/WorkSpace/WorkSpace';
import { useState } from 'react';

export const NotesContext = createContext(null);

function App() {

  const notesValue = useNotes([
    { id: 0, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test1' },
    { id: 1, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test2' },
    { id: 2, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test3' },
    { id: 3, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test4' }
  ]);

  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="app">
      <NotesContext.Provider value={{
        ...notesValue, 
        selectedNote,
        setSelectedNote
      }}>
        <Sidebar />
        <WorkSpace />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
