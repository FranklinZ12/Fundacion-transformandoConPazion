import 'styles/home/home.css';
import image from 'assets/ClubDeportivoTCP.png';
import CardList from 'components/home/CardList';
import ObjectList from 'components/home/ObjectList';

const HomeScreen = () => {
  return (
    <section>
      <figure className='datos pb-5'>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
        <CardList />
        <div className='item sm:col-span-2'>
          <h2 className='text-3xl font-bold my-2 color-text text-center'>OBJETIVOS</h2>
          <div className='text-base opacity-100 text-gray-700'>
           <ObjectList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen