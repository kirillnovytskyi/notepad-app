import './app-styles/app.css';

import { createContext } from 'react';
import { useNotes } from './common/hooks/useNotes';

import Sidebar from './components/Sidebar/Sidebar';
import WorkSpace from './components/WorkSpace/WorkSpace';

export const NotesContext = createContext(null);

function App() {

  const notesValue = useNotes([
    { id: 0, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test1', isSelected: false },
    { id: 1, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test2', isSelected: false },
    { id: 2, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test3', isSelected: false },
    { id: 3, title: 'My first note', shortcut: 'Lorem ipsum dolor sit amet...', text: 'test4', isSelected: false }
  ]);

  return (
    <div className="app">
      <NotesContext.Provider value={notesValue}>
        <Sidebar />
        <WorkSpace />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
