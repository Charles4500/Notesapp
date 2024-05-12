import React from 'react';
import '../components/style.css';

function AddNote({ setNote, note, notesBody, setNoteBody, currentEditedNote }) {
  console.log(notesBody, note);
  function handleSubmit(e) {
    e.preventDefault();
    if (!!currentEditedNote) {
      const findCurrentEditedNote = notesBody.findIndex(
        (item) => item.id === currentEditedNote.id
      );
      console.log(findCurrentEditedNote);
      notesBody[findCurrentEditedNote] = {
        ...notesBody[findCurrentEditedNote],
        label: note,
      };
    } else {
      notesBody.push({
        id: notesBody.length + 1,
        label: note,
      });
    }

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
        <button type="submit" className="button">
          {!!currentEditedNote ? 'Edit Note' : 'Add Note'}
        </button>
      </form>
    </div>
  );
}

export default AddNote;
