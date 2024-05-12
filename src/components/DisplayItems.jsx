function DisplayItems({ notesBody }) {
  return (
    <ul>
      {notesBody && notesBody.length > 0 ? (
        notesBody.map((notesItem) => (
          <li key={notesItem.id}>
            <label>{notesItem.label}</label>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        ))
      ) : (
        <div>No notes Added</div>
      )}
    </ul>
  );
}

export default DisplayItems;
