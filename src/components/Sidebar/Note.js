import { useContext } from 'react';
import { NotesContext } from '../../App';

const Note = ({ title, shortcut, id }) => {

  const { setSelectedNote, selectedNote, notes } = useContext(NotesContext);

  const selectNoteHandler = () => {
    if (!selectedNote || selectedNote.id !== id) {
      for (let note of notes) {
        if (note.id === id) {
          setSelectedNote(note);
          break;
        } 
      }
    }
  };

  return (
    <div className="sidebar-note" onClick={selectNoteHandler}>
      <div className="sidebar-note__title">{title}</div>
      <div className="sidebar-note__shortcut">{shortcut}</div>
    </div>
  );
}
 
export default Note;