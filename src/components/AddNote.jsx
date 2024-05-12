import React from 'react';
import '../components/style.css';

function AddNote({setNote,note,notesBody,setNoteBody}) {console.log(notesBody,note);
 function handleSubmit(e){
e.preventDefault();

notesBody.push({
  id: notesBody.length + 1,
  label: note,
});
setNoteBody(notesBody);
setNote('');
 }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="current-note"
          id="current-note"
          placeholder="Enter Note"
          className="input"
          value={note || ''}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type='submit'
        className="button">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
