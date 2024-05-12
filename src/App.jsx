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
        setNote={setNote}
        setNoteBody={setNoteBody}
        notesBody={notesBody}
        currentEditedNote={currentEditedNote}
      />
      <DisplayItems
        notesBody={notesBody}
        setCurrentEditedNote={setCurrentEditedNote}
        setNoteBody={setNoteBody}
      />
    </div>
  );
}

export default App;
