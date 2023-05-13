function ContactForm () {
    return (
        <form>
            <div className="grid gap-4 text-[#EEE] px-5">
                <div className="col-12 flex flex-col">
                    <label>Nombres</label>
                    <div>
                        <input
                            class="bg-gray-200 border-2 appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-cyan-500"
                            type="text"
                            placeholder="Jorge Ruiz" />
                    </div>
                </div>

                <div className="col-12 flex flex-col">
                    <label>Email</label>
                    <div>
                        <input
                            class="bg-gray-200 border-2 appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-cyan-500"
                            type="email"
                            placeholder="joruiz@developercode.dev" />
                    </div>
                </div>

                <div className="col-12 flex flex-col">
                    <label>Mensaje</label>
                    <div>
                        <textarea
                            class="bg-gray-200 border-2 appearance-none rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-cyan-500"
                            placeholder="Deseo trabajar contigo..." />
                    </div>
                </div>
                <button className="bg-cyan-500 text-[#eee] rounded-md py-2 mt-4">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default ContactForm
