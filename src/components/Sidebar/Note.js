import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { NotesContext } from '../../App';
import { DELETE_BUTTON_ID } from '../../common/constants';


const Note = ({ title, shortcut, id }) => {

  const { selectedNote, selectNote, removeNote } = useContext(NotesContext);

  return (
    <div 
      className={selectedNote?.id === id ? 'sidebar-note selected-note' : 'sidebar-note'} 
      onClick={e => selectNote(id, e.target.id)}
    >
      <div className="sidebar-note__title">{title}</div>
      <div className="sidebar-note__shortcut">{shortcut}</div>
      <button onClick={() => removeNote(id)} id={DELETE_BUTTON_ID} className="sidebar-note__delete-button">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
 
export default Note;