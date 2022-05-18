import CardSectionEthicalValues from 'components/about/valores/CardSectionEthicalValues';
import CardSectionPrincipals from 'components/about/principios/CardSectionPrincipals';
import 'styles/about/about.css';

const AboutScreen = () => {
  return (
    <section className='aboutScreen'>
      <CardSectionPrincipals
      title='Principios Corporativos' 
      parrafo='Nuestros principios como fundación.' 
      />
      <CardSectionEthicalValues
        title='Nuestros Valores'
        parrafo='Nuestros valores como fundación.'
      />
    </section>
  )
}

export default AboutScreen