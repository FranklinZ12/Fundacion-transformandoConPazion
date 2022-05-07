import 'styles/home/home.css';
import image from 'assets/TCP.webp';

const HomeScreen = () => {
  return (
    <section>
      <figure className='datos'>
        <div className='mt-14'>
          <figcaption>
            <h1 className='text-5xl mb-3'>Fundacion transformando con pazión</h1>
            <span className='text-base mb-5 text-justify'>Confianza y transformación social</span>
          </figcaption>
        </div>
        <div className='imagen'>
          <img src={image} alt='imagen-fundacion' />
        </div>
      </figure>
    </section>
  )
}

export default HomeScreen