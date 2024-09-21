export function Form() {

  function onSubmit (e) {
    e.preventDefault()

    console.log('enviar correo');
    
  }
  
  return (
    <form>
      <div class="grid grid-cols-12 gap-4 text-stone-700 dark:text-[#fff] px-5">
        <div class="col-span-12 flex flex-col xl:col-span-6">
          <label for="name">Nombres</label>
          <div>
            <input
              class="bg-gray-200 border-2 appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-yellow-500 transition-all duration-300 ease-in-out"
              type="text"
              id="name"
              placeholder="Jorge Ruiz"
            />
          </div>
        </div>

        <div class="col-span-12 flex flex-col xl:col-span-6">
          <label for="email">Email</label>
          <div>
            <input
              class="bg-gray-200 border-2 appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-yellow-500 transition-all duration-300 ease-in-out"
              type="email"
              id="email"
              placeholder="joruiz@developercode.dev"
            />
          </div>
        </div>

        <div class="col-span-12 flex flex-col">
          <label for="message">Mensaje</label>
          <div>
            <textarea
              class="bg-gray-200 border-2 appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-yellow-500 transition-all duration-300 ease-in-out"
              placeholder="Deseo trabajar contigo..."
              id="message"
              rows={10}></textarea>
          </div>
        </div>
        <button
          onClick={onSubmit}
          type="button"
          class="col-span-12 bg-yellow-500 dark:bg-fountain-blue-500 text-fountain-blue-950 hover:bg-fountain-blue-500 dark:hover:bg-yellow-500 transition-all duration-300 ease-in-out rounded-md py-2 mt-4 w-full xl:col-span-3"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};