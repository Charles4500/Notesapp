import { useState } from 'react';
import AddNote from './components/AddNote';
import './components/style.css';
import DisplayItems from './components/DisplayItems';
function App() {
  const [note, setNote] = useState('');
  const [notesBody, setNoteBody] = useState([]);
  const [currentEditedNote, setCurrentEditedNote] = useState(null);
  return (
    <div className="app">
      <AddNote
        note={note}
        notesBody={notesBody}
        setNote={setNote}
        setNoteBody={setNoteBody}
        currentEditedNote={currentEditedNote}
        setCurrentEditedNote = {setCurrentEditedNote}
      />
      <DisplayItems
        notesBody={notesBody}
        setCurrentEditedNote={setCurrentEditedNote}
        setNoteBody={setNoteBody}
        setNote ={setNote}
      />
    </div>
  );
}

export default App;
