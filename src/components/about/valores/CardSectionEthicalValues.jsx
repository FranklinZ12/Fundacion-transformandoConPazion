import CardListEthicalValues from './CardListPrincipal';

const CardSectionEthicalValues = ({title, parrafo}) => {
  return (
      <div className='flex flex-col text-center py-8'>
          <h2 className='font-semibold text-5xl mb-6 text-gray-800'>{title}</h2>
          <p>{parrafo}</p>
          <CardListEthicalValues />
      </div>
  )
}

export default CardSectionEthicalValues