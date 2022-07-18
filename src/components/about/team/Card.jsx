import { teamImages } from '../../../helpers/teamImages';

const Card = ({ image, nombre, puesto, pat, instagram, facebook, twitter }) => {
    return (
        <div className="mb-6 lg:mb-0">
            <div className="bg-white block rounded-lg shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src={teamImages(`./${image}.webp`)} alt="team" className="w-full rounded-t-lg" />
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                        style={{ left: 0, bottom: 0 }}>
                        <path fill="#fff"
                            d={pat}>
                        </path>
                    </svg>
                </div>
                <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">{nombre}</h5>
                    <p className="text-gray-500 mb-4">{puesto}</p>
                    <ul className="list-inside flex mx-auto justify-center">
                        <li>
                            <a href={instagram} className="px-2">
                                <i className="fa-brands fa-instagram text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href={facebook} className="px-2">
                                <i className="fa-brands fa-facebook-f text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href={twitter} className="px-2">
                                <i className="fa-brands fa-twitter text-2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card