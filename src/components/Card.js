const Card = ({ title, paragraphBody, textLink, link, imgPortfolio }) => {
  return (
    <article className='flex flex-col justify-start items-start shadow-md rounded-lg border border-stone-200 hover:border-cyan-500 hover:scale-105 transition-transform duration-200'>
      <img className='pb-4 rounded-t-lg' src={imgPortfolio} alt='' />
      <header className='px-2'>
        <h1 className='text-2xl text-stone-700'>{title}</h1>
      </header>
      <body className='p-2'>
        <p className=' text-justify text-stone-700'>
          {paragraphBody}
        </p>
      </body>
      <footer className='p-2'>
        <p className='text-stone-700'>
          <a href={link}>{textLink}</a>
        </p>
      </footer>
    </article>
  )
}

export default Card
