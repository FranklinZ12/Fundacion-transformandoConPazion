import CardSectionEthicalValues from 'components/about/valores/CardSectionEthicalValues';
import CardSectionPrincipals from 'components/about/principios/CardSectionPrincipals';
import 'styles/about/about.css';
import { Fragment } from 'react';

const AboutScreen = () => {
  return (
    <Fragment>
      <div className='section_curva'>
        <svg className='curva' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,224L40,234.7C80,245,160,267,240,266.7C320,267,400,245,480,224C560,203,640,181,720,186.7C800,192,880,224,960,240C1040,256,1120,256,1200,240C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
        </svg>
      </div>
      <section className='aboutScreen'>
        <h1 className='font-semibold text-5xl  mt-0 pt-0 mb-6 text-center text-black'>Nuestra Organización</h1>
        <p className='text-center'>Una historia hecha con pasión</p>
        <CardSectionPrincipals
          title='Principios Corporativos'
          parrafo='Nuestros principios como fundación.'
        />
        <CardSectionEthicalValues
          title='Nuestros Valores'
          parrafo='Nuestros valores como fundación.'
        />
      </section>
    </Fragment>
  )
}

export default AboutScreen