import imgPortfolio01 from '../assets/portfolio-01.png'
import Card from '../components/Card'

const Project = () => {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center py-10'>
      <div className='px-2 text-center'>
        <h2 className='title-page  tracking-tighter'>Proyectos</h2>
        <div className='grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-10  tracking-tighter'>
          <Card
            title='Médicos Salud'
            paragraphBody='Sitio web desarrollado para la red de clínicas Médicos Salud donde he utilizado tecnologías tales como HTML, CSS y PHP.'
            link='https:ambulancias.medicossalud.com'
            textLink='www.medicossalud.com'
            imgPortfolio={imgPortfolio01}
          />
          <Card
            title='Médicos Salud'
            paragraphBody='Sitio web desarrollado para la red de clínicas Médicos Salud donde he utilizado tecnologías tales como HTML, CSS y PHP.'
            link='https:ambulancias.medicossalud.com'
            textLink='www.medicossalud.com'
            imgPortfolio={imgPortfolio01}
          />
          <Card
            title='Médicos Salud'
            paragraphBody='Sitio web desarrollado para la red de clínicas Médicos Salud donde he utilizado tecnologías tales como HTML, CSS y PHP.'
            link='https:ambulancias.medicossalud.com'
            textLink='www.medicossalud.com'
            imgPortfolio={imgPortfolio01}
          />
          <Card
            title='Médicos Salud'
            paragraphBody='Sitio web desarrollado para la red de clínicas Médicos Salud donde he utilizado tecnologías tales como HTML, CSS y PHP.'
            link='https:ambulancias.medicossalud.com'
            textLink='www.medicossalud.com'
            imgPortfolio={imgPortfolio01}
          />
        </div>
      </div>
    </section>
  )
}

export default Project
