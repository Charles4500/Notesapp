import '../components/style.css'
function DisplayItems({ notesBody }) {
  return (
    <ul className='list'>
      {notesBody && notesBody.length > 0 ? (
        notesBody.map((notesItem) => (
          <li className='li' key={notesItem.id}>
            <label className='label'>{notesItem.label}</label>
            <div className='div'>
              <button className='btn'>Edit</button>
              <button className='btn2'>Delete</button>
            </div>
          </li>
        ))
      ) : (
        <div className='notes'>No notes Added</div>
      )}
    </ul>
  );
}

export default DisplayItems;
