
const Titulo = ({title, parrafo}) => {
  return (
      <div className='h-[400px]'>
          <div className='w-full h-2/3 flex flex-col items-center justify-center md:h-1/2'>
              <h1 className='font-semibold text-5xl mt-0 pt-0 mb-6 text-center text-black 
            uppercase'>{title}</h1>
              <p className='text-center'>{parrafo}</p>
          </div>
      </div>
  )
}

export default Titulo