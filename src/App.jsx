import { useState } from 'react';
import AddNote from './components/AddNote';
import './components/style.css'
import DisplayItems from './components/DisplayItems';
function App() {
  const [note,setNote] = useState('');
  const [notesBody,setNoteBody] = useState([]);
  return (
    <div className='app'>
      <AddNote note={note}
       setNote={setNote}
       setNoteBody = {setNoteBody}
       notesBody = {notesBody}
       />
       <DisplayItems notesBody={notesBody}/>
    </div>
  );
}

export default App;
