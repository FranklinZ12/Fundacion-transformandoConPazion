import CardLinks from './CardLinks';

const ListLinks = () => {
  return (
      <div className='w-[650px] grid grid-cols-2 gap-3'>
          <CardLinks url='procesos/todos/' title='Nuestros procesos' />
          <CardLinks url='procesos/medellin-barrista/' title='Medellin Barrista' />
          <CardLinks url='procesos/club-deportivo-tcp/' title='Club Deportivo TCP' />
          <CardLinks url='procesos/es&su/' title='ES&SU' />
          <CardLinks url='procesos/jovemp' title='Jovemp' />
          <CardLinks url='procesos/liga-guayabal/' title='Liga Guayabal' />
          <CardLinks url='procesos/torneo-barrial/' title='Torneo Barrial' />
          <CardLinks url='procesos/a-g-a/' title='A.G.A' />
          <CardLinks url='procesos/nataural-woman/' title='Natural Woman' />
          <CardLinks url='procesos/cronicas-y-pasion-deportiva/' title='Cronicas y Pasion Deportiva' />
      </div>
  )
}

export default ListLinks