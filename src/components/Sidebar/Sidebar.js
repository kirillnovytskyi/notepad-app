import './styles/sidebar.css';

import { useContext } from 'react';

import { NotesContext } from '../../App';
import CreateInput from './CreateInput';
import Note from './Note';

const Sidebar = () => {

  const { notes, clearNotes } = useContext(NotesContext);

  return (
    <div className="page-sidebar">
      <CreateInput />
      <div className="page-sidebar__notes-container">
        <div className="page-sidebar__notes">
          {
            notes.length 
            ? notes.map(({title, shortcut, id}, idx) => 
                <Note 
                  title={title} 
                  shortcut={shortcut} 
                  key={idx} 
                  id={id} 
                />)
            : <p className="page-sidebar__lack-of-notes-message">You don't have any notes</p>
          }
        </div>
      </div>
      <div className="page-slider__clear-button-container">
        <button type="button" className="page-slider__clear-button" onClick={clearNotes}>Delete All</button>
      </div>
    </div>
  );
}
 
export default Sidebar;