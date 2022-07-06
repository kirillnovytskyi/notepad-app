import { useContext } from 'react';
import { NotesContext } from '../../App';
import './styles/work-space.css';

const WorkSpace = () => {

  const { selectedNote } = useContext(NotesContext);

  if (!selectedNote) {
    return (
      <div className="work-space_empty">
        <p>Select note to edit...</p>
      </div>
    );
  }

  return (
    <div className="work-space">
      <h1>{selectedNote.text}</h1>
    </div>
  );
}
 
export default WorkSpace;