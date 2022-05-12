import 'styles/home/home.css';
import image from 'assets/ClubDeportivoTCP.png';

const HomeScreen = () => {
  return (
    <section>
      <figure className='datos'>
        <div className='imagen mt-14'>
          <img src={image} alt='imagen-fundacion' />
        </div>
        <div>
          <figcaption className='text-center'>
            <h1 className='text-5xl font-medium color-text'>Transformando <br />Con
              <span>pazión</span>
            </h1>
            <h3 className='text-3xl font-bold my-2 color-text'>FUNDACIÓN</h3>
            <p className='text-base opacity-100 text-gray-600'>Confianza y transformación social</p>
          </figcaption>
        </div>
      </figure>
      <div>
        
      </div>
    </section>
    
  )
}

export default HomeScreen