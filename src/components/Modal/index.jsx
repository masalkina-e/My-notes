import { useState } from "react"
import uuid4 from "uuid4"

function Modal({ toggleModal, addNewNote }) {
    const id = uuid4()
    const [newText, setNewText] = useState('')
    
    function onClick(event) {
        event.preventDefault()

        const newNote = {
            id: id,
            name: newText
        }
        
        addNewNote(newNote)
        toggleModal()
    }
    
    return (
        <form>
            <div className="bg-stone-100/70 absolute inset-0">
                <div className="w-3/5 h-96 my-12 mx-auto bg-white border-2 border-solid border-neutral-400 rounded-xl bg-orange-100">
                    <textarea 
                        onChange={(event) => setNewText(event.target.value)}
                        value={newText} 
                        type="text"
                        name="newText" 
                        className="w-full h-3/4 p-2.5 border-0 rounded-xl outline-0 border-b-2 border-neutral-400 text-xl"
                    >
                    </textarea>
                    <div className="flex flex-row justify-center p-5 gap-5">
                        <button onClick={event => onClick(event)} type="submit" className="py-1.5 px-2.5 border-0 rounded-md w-3/1 transition-all duration-500 ease-linear hover:scale-105">Готово</button>
                        <button onClick={toggleModal} className="py-1.5 px-2.5 border-0 rounded-md w-3/1 transition-all duration-500 ease-linear hover:scale-105">Отмена</button>
                    </div>
                </div>
            </div>
        </form>     
    )   
}

export default Modal