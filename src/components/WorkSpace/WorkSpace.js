import { useContext } from 'react';
import { NotesContext } from '../../App';
import './styles/work-space.css';
import { useControls } from './useControls';

const WorkSpace = () => {

  const { selectedNote } = useContext(NotesContext);
  const { title, text, changeTitle, changeText } = useControls(selectedNote?.title, selectedNote?.text, selectedNote);

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
    </div>
  );
}
 
export default WorkSpace;