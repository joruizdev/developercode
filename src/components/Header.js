import { useState } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='container mx-auto flex items-center justify-between py-5 px-2 lg:px-0 text-stone-800 z-50 '>
      <nav className='flex gap-5 items-center'>
        <a href='/' className='flex gap-2 items-center text-stone-700 text-xl font-medium'>
          <span className='flex justify-center items-center w-10 h-10 rounded-full bg-stone-700 text-stone-100 text-2xl hover:bg-cyan-500'>λ~</span>
          developercode
        </a>
        <ul className='hidden space-x-8 lg:flex text-stone-700'>
          <li className='hover:bg-cyan-500 hover:text-stone-100 rounded-md px-2 py-2'>
            <a href='/about'>Inicio</a>
          </li>
          <li className='hover:bg-cyan-500 hover:text-stone-100 rounded-md px-2 py-2'>
            <a href='/about'>Sobre mí</a>
          </li>
          <li className='hover:bg-cyan-500 hover:text-stone-100 rounded-md px-2 py-2'>
            <a href='/portfolio'>Proyectos</a>
          </li>
          <li className='hover:bg-cyan-500 hover:text-stone-100 rounded-md px-2 py-2'>
            <a href='/contact'>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className='hidden lg:flex gap-5'>
        <a href='/'>
          <svg className='fill-stone-700 hover:fill-cyan-500' width='32px' height='32px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z' />
          </svg>
        </a>
        <a href='/'>
          <svg className='fill-stone-700 hover:fill-cyan-500' width='32px' height='32px' viewBox='0 0 24 24' role='img' xmlns='http://www.w3.org/2000/svg'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' /></svg>
        </a>
      </div>
      <section className='flex lg:hidden'>
        <div className='space-y-1.5 cursor-pointer' onClick={() => setIsNavOpen((prev) => !prev)}>
          <span className='block h-0.5 w-4 rounded-full bg-stone-800' />
          <span className='block h-0.5 w-8 rounded-full bg-stone-800' />
          <span className='block h-0.5 w-6 rounded-full bg-stone-800' />
        </div>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div className='absolute top-0 right-0 px-8 py-8 cursor-pointer' onClick={() => setIsNavOpen(false)}>
            <svg className='h-8 w-8 text-stone-800' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='flex flex-col items-center justify-between w-full text-xl'>
            <li className='my-8 '>
              <a href='/about'>Inicio</a>
            </li>
            <li className='my-8 '>
              <a href='/about'>Sobre mí</a>
            </li>
            <li className='my-8 '>
              <a href='/portfolio'>Proyectos</a>
            </li>
            <li className='my-8'>
              <a href='/contact'>Contacto</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Header
