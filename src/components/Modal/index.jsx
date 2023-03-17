function Modal() {
    <div className="bg-stone-100/70 absolute inset-0 hidden">
        <div className="w-3/5 h-96 my-12 mx-auto bg-white border-2 border-solid border-neutral-400 rounded-xl bg-orange-100">
            <textarea className="w-full h-3/4 p-2.5 border-0 rounded-xl outline-0 border-b-2 border-neutral-400 text-xl"></textarea>
            <div className="flex flex-row justify-center p-5 gap-5">
              <button className="py-1.5 px-2.5 border-0 rounded-md w-3/1 transition-all duration-500 ease-linear hover:scale-105">Готово</button>
              <button className="py-1.5 px-2.5 border-0 rounded-md w-3/1 transition-all duration-500 ease-linear hover:scale-105">Отмена</button>
            </div>
        </div>
    </div>
}

export default Modal