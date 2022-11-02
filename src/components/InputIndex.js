export const Button = ({ text }) => {
  return (
    <button className='bg-cyan-500 rounded-md px-4 py-2 border border-cyan-500 text-stone-100 font-sourceCodePro hover:bg-stone-100 hover:border hover:border-stone-800 hover:text-stone-700'>{text}</button>
  )
}

export const Field = ({ text }) => {
  return (
    <input type='text' className='bg-stone-300 rounded-md py-1 px-2 w-full  focus:ring-cyan-500 focus:ring-1 focus:bg-white focus:outline-none focus:border-0 placeholder:font-light' placeholder={text} />
  )
}

export const TextArea = ({ text, row }) => {
  return (
    <textarea rows={row} className='bg-stone-300 rounded-md py-1 px-2 w-full  focus:ring-cyan-500 focus:ring-1 focus:bg-white focus:outline-none focus:border-0 placeholder:font-light' placeholder={text} />
  )
}
