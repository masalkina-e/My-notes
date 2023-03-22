import 'components/App/app.css';
import Modal from 'components/Modal';
import ModalEdit from 'components/ModalEdit';
import Notes from 'components/Notes';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(
    ['Заметка 1','Заметка 2']
  )

  function addNewNote(newNote) {
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  function editNote(id) {
    toggleModal()
    let newNotes = [...notes]
    let newNote = newNotes.find((newNote) => {
      return newNote.id === id
    })

    const index = newNotes.indexOf(newNote)
    newNotes.splice(index, 1, newNote)

    setNotes(newNotes)
  }

  function deleteNote(id) {
    const filteredNote = notes.filter(note => note.id !== id)
    setNotes(filteredNote)
  }

  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    if (isOpen === true){
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div>
      <header className="bg-orange-100">
        <div className="mx-auto mb-28 px-40">
          <button onClick={toggleModal} className="border-0 bg-orange-100 cursor-pointer py-5 px-0 text-3xl text-orange-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
          </button>
        </div>
      </header>

      <div className='mx-auto mb-28 px-40'>
        <h1 className='text-center py-12 text-5xl'>My notes</h1>
        {isOpen === true && <Modal toggleModal={toggleModal} addNewNote={addNewNote}/>}
        {isOpen === true && <ModalEdit notes={notes}/>}
        {notes.length > 0 && <Notes editNote={editNote} deleteNote={deleteNote} notes={notes}/>}
        {notes.length === 0 && <p className='flex justify-center pt-24 text-orange-400'>Заметок нет</p>}
      </div>
    </div>
  );
}

export default App;