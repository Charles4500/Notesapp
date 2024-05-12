import '../components/style.css';
function DisplayItems({ notesBody, setCurrentEditedNote, setNoteBody }) {
  function handleEdit(getCurrentItem) {
    console.log(getCurrentItem);
    setCurrentEditedNote(getCurrentItem);
    setNoteBody(getCurrentItem.label);
  }
  return (
    <ul className="list">
      {notesBody && notesBody.length > 0 ? (
        notesBody.map((noteItem) => (
          <li className="li" key={noteItem.id}>
            <label className="label">{noteItem.label}</label>
            <div className="div">
              <button onClick={() => handleEdit(noteItem)} className="btn">
                Edit
              </button>
              <button className="btn2">Delete</button>
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
