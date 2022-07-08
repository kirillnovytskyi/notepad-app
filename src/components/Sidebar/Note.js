import { useContext } from 'react';
import { NotesContext } from '../../App';

const Note = ({ title, shortcut, id }) => {

  const { selectedNote, selectNote } = useContext(NotesContext);

  return (
    <div 
      className={selectedNote?.id === id ? 'sidebar-note selected-note' : 'sidebar-note'} 
      onClick={() => selectNote(id)}
    >
      <div className="sidebar-note__title">{title}</div>
      <div className="sidebar-note__shortcut">{shortcut}</div>
    </div>
  );
}
 
export default Note;