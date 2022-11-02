import { Button, Field, TextArea } from '../components/InputIndex'
import ImgUser from '../assets/user.png'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <section className='container mx-auto min-h-screen flex flex-col justify-center  tracking-tighter py-10'>
        <h2 className='title-page text-center'>Contáctame</h2>
        <p className='text-stone-700 text-justify pb-10 px-2'>
          Si deseas conversar sobre algun proyecto o simplemente tienes una pregunta, hazmelo saber completando el siguiente formulario.
        </p>
        <div className='px-2 text-center w-full flex flex-col gap-4'>
          <Field text='Nombres' />
          <Field text='Email' />
          <Field text='Asunto' />
          <TextArea text='Mensaje' row='5' />
          <Button text='Enviar' />
        </div>
      </section>
      <section className='container mx-auto min-h-screen flex flex-col justify-center  tracking-tighter pb-10'>
        <h1 class='hidden text-2xl font-semibold text-cyan-500'>Contact Me</h1>
        <div class='flex flex-col items-center justify-center'>
          <div>
            <img class='rounded-full w-48 h-48' alt='Icono usuario' src={ImgUser} />
          </div>
          <div class='py-10 text-center'>
            <h2 class='text-4xl pb-2 font-mont font-semibold text-cyan-500'>
              Jorge Ruiz
            </h2>
            <p class='text-xl text-stone-700'>
              Diseñador y desarrollador web
            </p>
          </div>
        </div>
        <div class='text-center text-stone-700 py-10'>
          <p>joruiz@developercode.dev</p>
          <p>www.developercode.dev</p>
        </div>
        <div class='py-10 flex justify-center text-3xl text-stone-700 gap-14 lg:hidden'>
          <a href='/'><i class='fa-brands fa-github' /></a>
          <a href='/'><i class='fa-brands fa-linkedin' /></a>
          <a href='/'><i class='fa-brands fa-spotify' /></a>
          <a href='/'><i class='fa-brands fa-youtube' /></a>
        </div>
        <p class='text-stone-700 text-center'>Diseñado y construido por Jorge Ruiz</p>
      </section>
    </div>
  )
}

export default Contact
