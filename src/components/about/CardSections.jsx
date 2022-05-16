import CardList from "./CardList"

const CardSections = ({title, parrafo}) => {
  return (
      <div className='flex flex-col text-center'>
          <h2 className='font-semibold text-5xl mb-6 text-gray-800'>{title}</h2>
          <p>{parrafo}</p>
         <CardList />
      </div>
  )
}

export default CardSections