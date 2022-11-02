import { Button } from '../components/InputIndex'
import SocialNetwork from '../components/SocialNetwork'

const Home = () => {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col items-center gap-5 pt-14 lg:flex-row lg:justify-center'>
          <div className='flex flex-col items-center lg:items-start px-2'>
            <p className='text-6xl text-stone-700  font-medium tracking-tighter lg:text-xl'>λ ~/ developercode</p>
            <span className='text-xl pt-5'>Hola</span>
            <h1 className='text-6xl text-cyan-500  font-medium tracking-tighter lg:text-7xl'>Soy Jorge</h1>
            <p className='text-xl text-stone-700  pt-5 lg:text-4xl'>Diseñador & desarrollador web</p>
            <p className='text-xl text-stone-700  pt-5 lg:text-4xl'>Full Stack</p>
            <div className='py-5 text-xl'>
              <Button text='Contáctame' />
            </div>
            <div className='flex justify-center items-center gap-2'>
              <span className='text-6xl text-stone-700  font-medium tracking-tighter lg:text-xl'>λ ~/</span><span className='w-2 h-5 blink-console' />
            </div>
          </div>
          <div className='lg:w-1/3 z-20'>
            <div className='w-52 lg:w-full'>
              <img className='rounded-lg' src='https://as1.ftcdn.net/v2/jpg/02/94/17/56/1000_F_294175622_5GUR1x14LWuqRad0PNU4IgeLEK2lmvPh.jpg' alt='' />
            </div>
          </div>
        </div>
        <div className='pb-5 lg:hidden'>
          <SocialNetwork className='flex gap-5' size='28px' />
        </div>
      </div>
    </section>
  )
}

export default Home
