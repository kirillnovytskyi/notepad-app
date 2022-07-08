import { useContext } from 'react';
import { NotesContext } from '../../App';
import './styles/work-space.css';
import { useControls } from './useControls';

const WorkSpace = () => {

  const { selectedNote, removeNote, editNote } = useContext(NotesContext);
  const { 
    title, 
    text, 
    changeTitle, 
    changeText 
  } = useControls(selectedNote?.title, selectedNote?.text, selectedNote);

  const editButtonHandler = () => {
    editNote(selectedNote.id, { title, text });
  };

  if (!selectedNote) {
    return (
      <div className="work-space_empty">
        <p>Select note to edit...</p>
      </div>
    );
  }

  return (
    <div className="work-space">
      <div className="work-space__note-title-container">
        <input 
          className="work-space__note-title" 
          type="text" 
          placeholder="Title name..." 
          value={title}
          onChange={changeTitle}
        />
      </div>
      <div className="work-space__note-text-container">
        <textarea className="work-space__note-text" value={text} onChange={changeText}>
        </textarea>
      </div>
      <div className="work-space__controls">
        <button 
          className="work-space__delete-button work-space__button" 
          onClick={removeNote}
        >Delete</button>
        <button 
          className="work-space__edit-button work-space__button"
          onClick={editButtonHandler}  
        >Save</button>
      </div>
    </div>
  );
}
 
export default WorkSpace;