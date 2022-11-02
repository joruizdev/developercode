import { Button } from '../components/InputIndex'

const About = () => {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center py-10'>
      <div className='flex flex-col gap-5 justify-center items-center lg:flex-row'>
        <h2 className='title-page text-center lg:hidden'>Sobre mí</h2>
        <div className='w-64 lg:w-full'>
          <img className='rounded-lg' src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' alt='' />
        </div>
        <div className='px-2 text-center lg:text-start lg:pl-10'>
          <h2 className='hidden title-page text-start lg:block'>Sobre mí</h2>
          <p className='text-justify text-stone-700  tracking-tighter'>
            Me gusta que las cosas sean simples, elegantes y lo más importante, funcionales.
            Estoy dispuesto a enfrentarme a nuevos retos con orden, disciplina y especial atención en los detalles.
            Amante de la música, el deporte y el arte, interesado en proyectos backend y frontend.
          </p>
          <p className='text-justify py-5 text-stone-700  tracking-tighter'>Si es importante para ti, lo es para mi, estoy para ayudarte.</p>
          <h3 className='pt-4 pb-2 text-cyan-500 text-xl font-semibold'>Tecnologías</h3>
          <p className='text-stone-700'>Frontend: React, JavaScript, ASP.Net, JQuery, HTML, CSS, taildwind, bootstrap</p>
          <p className='text-stone-700'>Backend: Go, Php, C#, Phyton, Ruby, Node.js, VBA, Laravel, Symfony</p>
          <p className='pb-16 text-stone-700'>Base de datos: SQLServer, MySQL, PostgreSQL, MariaDB, Firebase, MongoDB</p>
          <Button text='Trabajemos juntos' />
        </div>
      </div>
    </section>
  )
}

export default About
