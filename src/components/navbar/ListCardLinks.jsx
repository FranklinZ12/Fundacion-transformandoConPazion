import React from 'react'
import CardLinks from './CardLinks'

const ListCardLinks = () => {
  return (
      <div className='w-[650px] grid grid-cols-2 gap-3'>
          <CardLinks url='nosotros/organizacion/' title='Nuestra Organizacion'
              parrafo='Conozca nuestra escencia y un poco de nuestra historia.'
          />
          <CardLinks url='nosotros/equipo/' title='Nuestro equipo'
              parrafo='Conozca nuestro equipo de trabajo todos entregados a la fundacion.'
          />
          <CardLinks url='nosotros/voluntario-y-donacion/'
              title='Voluntario y donacion'
          />
      </div>
  )
}

export default ListCardLinks