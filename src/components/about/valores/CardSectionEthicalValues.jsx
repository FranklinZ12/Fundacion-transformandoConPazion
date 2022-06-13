import CardListEthicalValues from './CardListEthicalValues';

const CardSectionEthicalValues = ({title, parrafo}) => {
  return (
      <div className='flex flex-col text-center py-8'>
      <h2 className='font-semibold text-4xl mb-6 text-gray-800 uppercase'>{title}</h2>
          <p>{parrafo}</p>
          <CardListEthicalValues />
      </div>
  )
}

export default CardSectionEthicalValues