import CardSectionEthicalValues from 'components/about/valores/CardSectionEthicalValues';
import CardSectionPrincipals from 'components/about/principios/CardSectionPrincipals';
import 'styles/about/about.css';
import { Fragment } from 'react';
import QuienesSomos from 'components/about/nosotros/QuienesSomos';
import Reseña from 'components/about/reseña/Reseña';
import CardSectionLogo from 'components/about/logotipo/CardSectionLogo';
import Titulo from 'components/ui/Titulo';
import Curva from 'components/ui/Curva';


const AboutScreen = () => {
  return (
    <Fragment>
      <Curva />
      <section className='aboutScreen'>
        <Titulo title='Nuestra Organización' parrafo='Una historia hecha con pasión' />
        <QuienesSomos />
        <Reseña />
        <CardSectionPrincipals
          title='Principios Corporativos'
          parrafo='Nuestros principios como fundación'
        />
        <CardSectionEthicalValues
          title='Nuestros Valores'
          parrafo='Nuestros valores como fundación'
        />
        <CardSectionLogo
        title='Nuestro Logotipo'
        />
      </section>
    </Fragment>
  )
}

export default AboutScreen