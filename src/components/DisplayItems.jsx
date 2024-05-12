import '../components/style.css';
function DisplayItems({ notesBody,setNote, setCurrentEditedNote, setNoteBody }) {
  function handleEdit(getCurrentItem) {
    console.log(getCurrentItem);
    setCurrentEditedNote(getCurrentItem);
    setNote(getCurrentItem.label);
  }
  function handleDelete(getCurrentId) {
    console.log(getCurrentId);
    setNoteBody(notesBody.filter(item => item.id !== getCurrentId))
  }
  return (
    <ul className="list">
      {notesBody && notesBody.length > 0 ? (
        notesBody.map((noteBody) => (
          <li className="li" key={noteBody.id}>
            <label className="label">{noteBody.label}</label>
            <div className="div">
              <button onClick={() => handleEdit(noteBody)} className="btn">
                Edit
              </button>
              <button
                className="btn2"
                onClick={() => handleDelete(noteBody.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <div className="notes">No notes Added</div>
      )}
    </ul>
  );
}

export default DisplayItems;
