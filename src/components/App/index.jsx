import 'components/App/app.css';
import Modal from 'components/Modal';
import ModalEdit from 'components/ModalEdit';
import { useState } from 'react';

function App() {

  const [notes, renderNotes] = useState(
    ['Заметка 1','Заметка 2']
  )

  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    if (isOpen === true && <Modal />) {
      setIsOpen(true)
    }
  }

  return (
    <div>
      <header className="bg-orange-100">
        <div className="mx-auto mb-28 px-10">
          <button onClick={toggleModal} className="border-0 bg-orange-100 cursor-pointer py-5 px-0 text-3xl text-orange-600">+</button>
        </div>
      </header>

      <div className='mx-auto mb-28 px-10'>
        <h1 className='text-center py-12 text-5xl'>My notes</h1>
        <Modal />
        <ModalEdit />
        <div className='border border-black rounded-xl bg-white p-5 gap-2.5 flex flex-col'>
            {notes.map((note) => {
                return (
                <div className='flex flex-row border-b border-black last:border-b-0'>
                   <p className='pb-2.5 w-full cursor-pointer text-justify pr-2.5'>{note}</p>
                   <button>Удалить</button>
                </div>
                )
            })}
        </div> 
        <p className='flex justify-center pt-24 text-orange-400 hidden'>Заметок нет</p>
      </div>
    </div>
  );
}

export default App;