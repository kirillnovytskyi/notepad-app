import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { NotesContext } from '../../App';

const CreateInput = () => {

  const [title, setTitle] = useState('');

  const { addNote } = useContext(NotesContext);

  const addButtonHandler = e => {
    addNote(title.trim().length ? title : void 0);
    setTitle('');
  }

  return (
    <div className="create-input">
      <div className="create-input__input-container">
        <input 
          type="text" 
          className="create-input__text-input" 
          placeholder="Note title..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div 
        className="create-input__add-button-container" 
        onClick={addButtonHandler}
      >
        <FontAwesomeIcon icon={faPlus} className="create-input__add-button" />
      </div>
    </div>
  );
}
 
export default CreateInput;