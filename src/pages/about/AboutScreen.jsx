import CardSections from 'components/about/CardSections';
import 'styles/about/about.css';

const AboutScreen = () => {
  return (
    <section className='aboutScreen'>
      <CardSections 
      title='Principios Corporativos' 
      parrafo='Nuestros principios como fundación.' 
      />
    </section>
  )
}

export default AboutScreen